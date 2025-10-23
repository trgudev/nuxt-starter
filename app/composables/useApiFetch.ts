import { useFetch, type UseFetchOptions } from 'nuxt/app'
import { defu } from 'defu'

export function useApiFetch<T>(url: string, options: UseFetchOptions<App.Service.Response<T>, T> = {}) {
  const config = useRuntimeConfig()

  const defaults: UseFetchOptions<App.Service.Response<T>, T> = {
    baseURL: config.public.API_BASE_URL as string,
    key: url,
    server: true,

    transform: (response: App.Service.Response<T>): T => {
      return response.data
    }
  }

  const mergedOptions = defu(options, defaults)

  return useFetch(url, mergedOptions)
}
