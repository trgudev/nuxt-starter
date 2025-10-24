export const fetchGetPricingPage = () => {
  return useApiFetch<Api.PricingManage.PricingPageData>('/api/pricing')
}
