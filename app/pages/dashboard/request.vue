<script setup lang='ts'>
definePageMeta({
  layout: 'dashboard'
})

defineOptions({
  name: 'DashboardRequest'
})
</script>

<template>
  <UDashboardPanel id="request">
    <template #header>
      <UDashboardNavbar
        title="Request"
        :ui="{ right: 'gap-3' }"
      >
        <template #leading>
          <UDashboardSidebarCollapse />
        </template>
      </UDashboardNavbar>
    </template>

    <template #body>
      <UCard variant="soft">
        对 useFetch 和 $fetch 进行简单的封装
      </UCard>

      <UCard>
        <template #header>
          useApiFetch
        </template>
        主要用于 SSR 的数据请求，在顶层 setup 中使用
      </UCard>

      <UCard>
        <template #header>
          useApiRequest
        </template>
        主要用于客户端的请求
      </UCard>
    </template>
  </UDashboardPanel>
</template>
