<template>
  <div>
    <UButton @click="handleGetUserInfo">
      获取用户信息
    </UButton>

    {{ userInfo }}
  </div>
</template>

<script setup lang='ts'>
import { useUserStore } from '~/store/user'

definePageMeta({
  layout: 'dashboard'
})

defineOptions({
  name: 'DashboardHome'
})

const userStore = useUserStore()

const { userInfo } = storeToRefs(userStore)

const handleGetUserInfo = async () => {
  await userStore.getUserInfo()
}
</script>

<style lang='scss' scoped></style>
