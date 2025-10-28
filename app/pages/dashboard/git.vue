<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})

defineOptions({
  name: 'DashboardGit'
})
</script>

<template>
  <UDashboardPanel id="git">
    <template #header>
      <UDashboardNavbar
        title="Git"
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
          严格遵循
          <UButton
            variant="link"
            target="_blank"
            href="https://zj-git-guide.readthedocs.io/zh-cn/latest/message/Angular%E6%8F%90%E4%BA%A4%E4%BF%A1%E6%81%AF%E8%A7%84%E8%8C%83/"
          >
            Angular提交信息规范
          </UButton>
        </p>

        <p>
          集成了
          <UBadge variant="soft">
            simple-git-hooks
          </UBadge>，
          会在提交代码之前进行代码检查，若有错误会提示用户进行修正。
        </p>

        <p>
          建议使用命令行提交，首先将文件放到暂存区，然后运行
          <UBadge variant="soft">
            pnpm commit
          </UBadge>。
        </p>

        <p>
          如果需要临时取消检查，可运行
          <UBadge variant="soft">
            git commit -m "commit message" --no-verify
          </UBadge>
        </p>
      </UCard>
    </template>
  </UDashboardPanel>
</template>
