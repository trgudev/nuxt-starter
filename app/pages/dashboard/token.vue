<script setup lang="ts">
import { useUserStore } from '~/store/user'

definePageMeta({
  layout: 'dashboard'
})

defineOptions({
  name: 'DashboardToken'
})

const userStore = useUserStore()
const router = useRouter()

const { userInfo, tokenInfo } = storeToRefs(userStore)

const handleGetUserInfo = async () => {
  if (!tokenInfo.value.accessToken) {
    router.push('/login')
    return
  }

  await userStore.getUserInfo()
}
</script>

<template>
  <UDashboardPanel id="token">
    <template #header>
      <UDashboardNavbar
        title="Token"
        :ui="{ right: 'gap-3' }"
      >
        <template #leading>
          <UDashboardSidebarCollapse />
        </template>
      </UDashboardNavbar>
    </template>

    <template #body>
      <UCard variant="soft">
        <p>点击按钮，查看network的请求，目前token设置过期时间为1min，相隔1min之后请求，会刷新token并重新发起请求</p>
        <p>后端代码在server目录下，仅做模拟接口，需要根据项目的实际情况修改</p>
        <p class="text-orange-400">
          当前部署在 github page 上，无法运行服务端代码，接口会报错，需要本地运行项目且需要登陆先
        </p>
      </UCard>

      <UCard>
        <template #header>
          refresh token 测试
        </template>
        <ClientOnly>
          <ul>
            <li>{{ userInfo.fullName }}</li>
            <li>{{ userInfo.email }}</li>
            <li>{{ userInfo.createdAt }}</li>
          </ul>
        </ClientOnly>

        <UButton
          class="mt-2"
          @click="handleGetUserInfo"
        >
          获取用户信息
        </UButton>
      </UCard>
    </template>
  </UDashboardPanel>
</template>
