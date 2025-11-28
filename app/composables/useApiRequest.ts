import { $fetch, type FetchOptions } from 'ofetch'
import { useUserStore } from '~/store/user'
import { defu } from 'defu'

export const useApiRequest = <T>(url: string, options: FetchOptions<'json'> = {}): Promise<App.Service.Response<T>> => {
  const config = useRuntimeConfig()
  const userStore = useUserStore()
  const toast = useToast()
  const router = useRouter()

  const BASE_URL = config.public.API_BASE_URL
  const LOGIN_URL = config.public.SERVER_LOGIN_URL
  const REFRESH_URL = config.public.SERVER_REFRESH_TOKEN_URL

  const showRefreshTokenExpiredToast = () => {
    toast.add({
      title: 'Authentication Error (401)',
      description: 'Your token has expired. Please log in again.',
      color: 'error',
      icon: 'i-heroicons-exclamation-circle'
    })
  }

  const defaults: FetchOptions<'json'> = {
    baseURL: BASE_URL,

    onRequest({ options }) {
      const token = userStore.authorization
      if (token) {
        options.headers = new Headers(options.headers)
        options.headers.set('Authorization', token)
      }
    },

    // http 状态码 200 201 302 等
    onResponse({ response }) {
      const apiResponse = response._data as App.Service.Response<T>

      if (response.status < 400 && apiResponse?.code !== Number(config.public.SERVER_SUCCESS_CODE)) {
        const description = apiResponse?.message || 'An unknown error occurred.'
        toast.add({
          title: 'Operation Failed',
          description,
          color: 'error',
          icon: 'i-heroicons-exclamation-triangle'
        })
        return Promise.reject(description)
      }
    },

    async onResponseError({ request, response }) {
      const status = response.status
      const message = response._data?.message || 'An unexpected error occurred.'

      const requestUrl = request.toString()

      if (status === 401) {
        // Refresh Token 过期，登出
        if (requestUrl.includes(REFRESH_URL)) {
          router.replace('/login')
          showRefreshTokenExpiredToast()
          return
        }

        // access token 过期：直接 return，让错误抛出到下方的 .catch 中处理重试
        if (!requestUrl.includes(LOGIN_URL)) return

        // login 401 不处理
      }

      toast.add({
        title: `Error (${status})`,
        description: message,
        color: 'error',
        icon: 'i-heroicons-exclamation-circle'
      })

      throw new Error(message)
    }
  }

  const mergedOptions = defu(options, defaults)

  return $fetch<App.Service.Response<T>>(url, mergedOptions).catch(async (error) => {
    const status = error.response?.status
    const requestUrl = error.request?.toString() || url

    // access token 过期：尝试刷新 Token
    if (status === 401 && !requestUrl.includes(LOGIN_URL) && !requestUrl.includes(REFRESH_URL)) {
      const success = await userStore.handleRefreshToken()

      if (success) {
        // 刷新成功：
        // 注意：这里不需要手动设置 headers，因为递归调用会重新触发 onRequest，
        // onRequest 会从 userStore 中拿到最新的 authorization。
        return useApiRequest<T>(url, options)
      } else {
        // 刷新失败：
        router.replace('/login')
        showRefreshTokenExpiredToast()
        return Promise.reject(error)
      }
    }

    throw error
  })
}
