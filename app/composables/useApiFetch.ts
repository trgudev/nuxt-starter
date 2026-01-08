import { useFetch, type UseFetchOptions } from 'nuxt/app'
import { defu } from 'defu'

// 查询参数使用query，params被弃用了
export function useApiFetch<T>(url: string, options: UseFetchOptions<App.Service.Response<T>, T> = {}) {
  const config = useRuntimeConfig()

  // 根据 URL 和 query 生成唯一的缓存 key，避免不同参数共用缓存
  const generateKey = () => {
    const queryParams = options.query
    if (queryParams) {
      const params = toValue(queryParams) as Record<string, unknown>
      if (params && Object.keys(params).length > 0) {
        const sortedParams = Object.keys(params)
          .sort()
          .filter(k => params[k] !== undefined && params[k] !== null)
          .map(k => `${k}=${params[k]}`)
          .join('&')
        return sortedParams ? `${url}?${sortedParams}` : url
      }
    }
    return url
  }

  const defaults: UseFetchOptions<App.Service.Response<T>, T> = {
    baseURL: config.public.API_BASE_URL as string,
    key: generateKey(),
    server: true,

    transform: (response: App.Service.Response<T>): T => {
      return response.data
    }
  }

  const mergedOptions = defu(options, defaults)

  return useFetch(url, mergedOptions)
}
