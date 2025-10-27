<script setup lang='ts'>
import type { TabsItem } from '@nuxt/ui'

definePageMeta({
  layout: 'dashboard'
})

defineOptions({
  name: 'DashboardRequest'
})

const items1 = ref<TabsItem[]>([
  {
    label: '定义接口',
    slot: '1-1'
  },
  {
    label: '定义类型',
    slot: '1-2'
  },
  {
    label: '使用',
    slot: '1-3'
  }
])

const items2 = ref<TabsItem[]>([
  {
    label: '定义接口',
    slot: '2-1'
  },
  {
    label: '定义类型',
    slot: '2-2'
  },
  {
    label: '使用',
    slot: '2-3'
  }
])
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
      <UCard
        variant="soft"
        :ui="{ root: 'overflow-visible' }"
      >
        对 useFetch 和 $fetch 进行简单的封装
      </UCard>

      <UCard :ui="{ root: 'overflow-visible' }">
        <template #header>
          useApiFetch
        </template>
        <p>
          主要用于 SSR 的数据请求，在顶层 setup 中使用
        </p>

        <UTabs
          :items="items1"
          class="w-full"
        >
          <template #1-1>
            <img
              src="./image-1.png"
              alt=""
              class="scale-80"
            >
          </template>
          <template #1-2>
            <img
              src="./image-2.png"
              alt=""
              class="scale-80"
            >
          </template>
          <template #1-3>
            <img
              src="./image-3.png"
              alt=""
              class="scale-80"
            >
          </template>
        </UTabs>
      </UCard>

      <UCard :ui="{ root: 'overflow-visible' }">
        <template #header>
          useApiRequest
        </template>
        <p> 主要用于客户端的请求</p>

        <UTabs
          :items="items2"
          class="w-full"
        >
          <template #2-1>
            <img
              src="./image-4.png"
              alt=""
              class="scale-80"
            >
          </template>
          <template #2-2>
            <img
              src="./image-5.png"
              alt=""
              class="scale-80"
            >
          </template>
          <template #2-3>
            <img
              src="./image-6.png"
              alt=""
              class="scale-80"
            >
          </template>
        </UTabs>
      </UCard>
    </template>
  </UDashboardPanel>
</template>
