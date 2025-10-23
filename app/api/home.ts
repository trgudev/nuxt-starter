export const fetchGetHomePage = () => {
  return useApiFetch<Api.HomeManage.HomePageData>('/api/home')
}
