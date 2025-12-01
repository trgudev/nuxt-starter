import { $fetch, type FetchOptions } from 'ofetch'
import { useUserStore } from '~/store/user'
import { defu } from 'defu'

export const useApiRequest = <T>(url: string, options: FetchOptions<'json'> = {}): Promise<App.Service.Response<T>> => {
  const config = useRuntimeConfig()
  const userStore = useUserStore()
  const toast = useToast()

  const { API_BASE_URL, SERVER_LOGIN_URL, SERVER_REFRESH_TOKEN_URL, ACCESS_TOKEN_EXPIRED_CODE, SERVER_SUCCESS_CODE }
    = config.public

  const CODE_ACCESS_TOKEN_EXPIRED = Number(ACCESS_TOKEN_EXPIRED_CODE)
  const CODE_SUCCESS = Number(SERVER_SUCCESS_CODE)

  const defaults: FetchOptions<'json'> = {
    baseURL: API_BASE_URL,

    onRequest({ options }) {
      const token = userStore.authorization
      if (token) {
        options.headers = new Headers(options.headers)
        options.headers.set('Authorization', token)
      }
    },

    async onResponse({ response }) {
      const apiResponse = response._data as App.Service.Response<T>

      if (apiResponse?.code === CODE_ACCESS_TOKEN_EXPIRED) {
        const requestUrl = response.url || url

        if (!requestUrl.includes(SERVER_LOGIN_URL) && !requestUrl.includes(SERVER_REFRESH_TOKEN_URL)) {
          const success = await userStore.handleRefreshToken()

          if (success) {
            const retryResponse = await useApiRequest<T>(url, options)
            response._data = retryResponse
            return
          } else {
            userStore.logout(true)
            toast.add({
              title: 'Authentication Expired',
              description: 'Please log in again.',
              color: 'error',
              icon: 'i-heroicons-exclamation-circle'
            })
            return Promise.reject(new Error('Authentication expired'))
          }
        }
      }

      if (response.status < 400 && apiResponse?.code !== CODE_SUCCESS) {
        const description = apiResponse?.message || 'An unknown error occurred.'
        toast.add({
          title: 'Operation Failed',
          description,
          color: 'error',
          icon: 'i-heroicons-exclamation-triangle'
        })
        return Promise.reject(new Error(description))
      }
    },

    async onResponseError({ request, response }) {
      const status = response.status
      const message = response._data?.message || 'An unexpected error occurred.'
      const requestUrl = request.toString()

      // HTTP 401 处理
      if (status === 401) {
        // 排除登录接口本身的报错
        if (!requestUrl.includes(SERVER_LOGIN_URL)) {
          userStore.logout()

          toast.add({
            title: 'Authentication Error',
            description: 'Your session has expired. Please log in again.',
            color: 'error',
            icon: 'i-heroicons-exclamation-circle'
          })
        }
        throw new Error(message)
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
