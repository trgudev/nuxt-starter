// 获取定价页面数据
export const fetchGetPricingPage = () => {
  return useApiFetch<Api.PricingManage.PricingPageData>('/api/pricing')
}
