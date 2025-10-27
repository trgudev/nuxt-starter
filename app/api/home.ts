// 获取首页数据
export const fetchGetHomePage = () => {
  return useApiFetch<Api.HomeManage.HomePageData>('/api/home')
}
