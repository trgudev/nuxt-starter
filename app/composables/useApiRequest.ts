import { $fetch, type FetchOptions } from 'ofetch'
import { useUserStore } from '~/store/user'
import { defu } from 'defu'

export const useApiRequest = <T>(url: string, options: FetchOptions<'json'> = {}) => {
  const config = useRuntimeConfig()
  const userStore = useUserStore()
  const toast = useToast()
  const router = useRouter()

  const defaults: FetchOptions<'json'> = {
    baseURL: config.public.API_BASE_URL as string,

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

      if (response.status < 400 && apiResponse?.code !== import.meta.env.NUXT_API_SUCCESS_CODE) {
        const description = apiResponse?.message || 'An unknown error occurred.'
        toast.add({
          title: 'Operation Failed',
          description,
          color: 'error',
          icon: 'i-heroicons-exclamation-triangle'
        })
        // 不能throw new Error，否则500状态码不会触发 onResponseError
        return Promise.reject(description)
      }
    },

    // http 状态码  401 403 500 502 等
    async onResponseError({ request, response, options }) {
      const status = response.status
      const message = response._data?.message || 'An unexpected error occurred.'

      if (status === 401) {
        // refresh token 过期
        if (request.toString() === import.meta.env.NUXT_SERVER_REFRESH_TOKEN_URL) {
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
        await userStore.handleRefreshToken()

        const headers = { ...options.headers, Authorization: userStore.authorization! }

        useApiRequest(request as string, { ...options, headers })

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
