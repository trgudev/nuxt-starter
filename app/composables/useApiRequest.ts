import { $fetch, type FetchOptions } from 'ofetch'
// import { useUserStore } from '~/stores/user'
import { defu } from 'defu'

export const useApiRequest = <T>(url: string, options: FetchOptions<'json'> = {}) => {
  const config = useRuntimeConfig()
  // const userStore = useUserStore()
  const toast = useToast()
  const router = useRouter()

  const defaults: FetchOptions<'json'> = {
    baseURL: config.public.API_BASE_URL as string,

    onRequest({ options }) {
      // TODO: 从store中获取token
      const token = 'userStore.accessToken'
      if (token) {
        options.headers = new Headers(options.headers)
        options.headers.set('Authorization', `Bearer ${token}`)
      }
    },

    // 200 201 302 等
    onResponse({ response }) {
      const apiResponse = response._data as App.Service.Response<T>

      if (response.status < 400 && apiResponse?.code !== 0) {
        const description = apiResponse?.message || 'An unknown error occurred.'
        toast.add({
          title: 'Operation Failed',
          description,
          color: 'error',
          icon: 'i-heroicons-exclamation-triangle'
        })
        // 不能throw new Error，不然500状态码不会触发 onResponseError
        return Promise.reject(description)
      }
    },

    // 401 403 500 502 等
    async onResponseError({ request, response, options }) {
      const status = response.status
      const message = response._data?.message || 'An unexpected error occurred.'
      // 目前特殊接口中只有登录接口报错会401，url名称与其他接口很相似，所以全量匹配
      const loginUrl = `${config.public.API_BASE_URL}/token/user`
      if (status === 401 && request.toString() !== loginUrl) {
        // refresh token 过期
        if (request.toString().endsWith('/refresh')) {
          router.replace('/login')
          toast.add({
            title: 'Authentication Error (401)',
            description: 'Your session has expired. Please log in again.',
            color: 'error',
            icon: 'i-heroicons-exclamation-circle'
          })
          return
        }

        // access token 过期
        // await userStore.refreshAccessToken()

        useApiRequest(request as string, options)

        return
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

  return $fetch<App.Service.Response<T>>(url, mergedOptions)
}
