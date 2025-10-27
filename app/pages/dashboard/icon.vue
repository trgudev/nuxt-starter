<script setup lang='ts'>
definePageMeta({
  layout: 'dashboard'
})

defineOptions({
  name: 'DashboardIcon'
})
</script>

<template>
  <UDashboardPanel id="home">
    <template #header>
      <UDashboardNavbar
        title="Icon"
        :ui="{ right: 'gap-3' }"
      >
        <template #leading>
          <UDashboardSidebarCollapse />
        </template>
      </UDashboardNavbar>
    </template>

    <template #body>
      <UCard variant="soft">
        <p>
          vscode 插件
          <UButton
            variant="link"
            href="https://marketplace.visualstudio.com/items?itemName=antfu.iconify"
            target="_blank"
          >
            iconify
          </UButton>
        </p>

        <p>
          图标集合
          <UButton
            variant="link"
            href="https://icon-sets.iconify.design/"
            target="_blank"
          >
            https://icon-sets.iconify.design/
          </UButton>
        </p>

        <p>
          更多图标组件信息参考
          <UButton
            variant="link"
            href="https://ui.nuxt.com/docs/getting-started/integrations/icons/nuxt"
            target="_blank"
          >
            文档
          </UButton>
        </p>
      </UCard>

      <UCard>
        <template #header>
          本地图标
        </template>

        <p>将下载的svg放在app/assets/icons目录下</p>
        <p>图标名称格式为  <UBadge>i-local:{icon-name}</UBadge> </p>

        <div class="space-x-4 mt-4">
          <UIcon
            name="i-local:airplay"
          />
          <UIcon
            name="i-local:alarm-clock"
          />
          <UIcon
            name="i-local:aperture"
          />
        </div>

        <div class="space-x-4">
          <UIcon
            name="i-local:airplay"
            size="24"
            class="text-green-400"
          />
          <UIcon
            name="i-local:alarm-clock"
            size="24"
            class="text-green-400"
          />
          <UIcon
            name="i-local:aperture"
            size="24"
            class="text-green-400"
          />
        </div>
      </UCard>

      <UCard>
        <template #header>
          在线图标

          <p>进入网站 https://icon-sets.iconify.design/lucide/，找到想要的图标</p>
          <p>点击图标，复制图标名称放到 UIcon 的 name 上</p>

          <div class="space-x-4 mt-4">
            <UIcon name="lucide:cat" />
            <UIcon name="mingcute:airplane-line" />
            <UIcon name="mingcute:apple-fill" />
          </div>

          <div class="space-x-4 mt-4">
            <UIcon
              class="text-green-400"
              size="48"
              name="lucide:cat"
            />
            <UIcon
              class="text-green-400"
              size="48"
              name="mingcute:airplane-line"
            />
            <UIcon
              class="text-green-400"
              size="48"
              name="mingcute:apple-fill"
            />
          </div>
        </template>
      </UCard>
    </template>
  </UDashboardPanel>
</template>
