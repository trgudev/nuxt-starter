<script setup lang='ts'>
definePageMeta({
  layout: 'dashboard'
})

defineOptions({
  name: 'DashboardHome'
})
</script>

<template>
  <UDashboardPanel id="home">
    <template #header>
      <UDashboardNavbar
        title="Home"
        :ui="{ right: 'gap-3' }"
      >
        <template #leading>
          <UDashboardSidebarCollapse />
        </template>
      </UDashboardNavbar>
    </template>

    <template #body>
      <UCard variant="soft">
        点击侧边菜单查看对应的demo
      </UCard>
    </template>
  </UDashboardPanel>
</template>
