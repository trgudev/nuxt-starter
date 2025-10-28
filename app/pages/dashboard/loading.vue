<script setup lang='ts'>
definePageMeta({
  layout: 'dashboard'
})

defineOptions({
  name: 'DashboardLoading'
})

const loading = ref(true)
</script>

<template>
  <UDashboardPanel id="loading">
    <template #header>
      <UDashboardNavbar
        title="Loading"
        :ui="{ right: 'gap-3' }"
      >
        <template #leading>
          <UDashboardSidebarCollapse />
        </template>
      </UDashboardNavbar>
    </template>

    <template #body>
      <UCard variant="soft">
        <p>自定义loading指令</p>
        <p>
          如果你不喜欢这个鼠鼠，请自行修改
          <UBadge variant="soft">
            ~/app/assets/css/loading.css
          </UBadge>、
          <UBadge variant="soft">
            ~/app/plugins/loading.client.ts 的 spinnerHtml
          </UBadge>
        </p>
      </UCard>

      <UCard>
        <template #header>
          <UButton @click="loading = !loading">
            切换loading状态
          </UButton>
        </template>

        <div
          v-loading="loading"
          class="py-20"
        >
          这是一段正在loading的内容，loading是一只可爱的鼠鼠
        </div>
      </UCard>
    </template>
  </UDashboardPanel>
</template>
