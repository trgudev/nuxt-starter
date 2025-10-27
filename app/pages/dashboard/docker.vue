<script setup lang="ts">
definePageMeta({
  layout: 'dashboard'
})

defineOptions({
  name: 'DashboardDocker'
})
</script>

<template>
  <UDashboardPanel id="docker">
    <template #header>
      <UDashboardNavbar
        title="Docker"
        :ui="{ right: 'gap-3' }"
      >
        <template #leading>
          <UDashboardSidebarCollapse />
        </template>
      </UDashboardNavbar>
    </template>

    <template #body>
      <UCard variant="soft">
        本项目的Dockerfile需要在构建镜像时传递BUILD_ENV参数，默认构建环境为dev。
      </UCard>

      <UCard>
        <template #header>
          构建镜像
        </template>
        <UBadge variant="soft">
          docker build --build-arg BUILD_ENV=prod -t your-image-name .
        </UBadge>
      </UCard>

      <UCard>
        <template #header>
          Mac M芯片构建 AMD64 镜像
          <p class="text-sm text-gray-400">
            M1 芯片是 arm64 架构，服务器是 amd64 架构，所以需要指定平台为 amd64 架构
          </p>
        </template>

        <UBadge variant="soft">
          docker buildx build \
          --platform linux/amd64 \
          --build-arg BUILD_ENV=prod \
          -t website \
          --load .
        </UBadge>
      </UCard>

      <UCard>
        <template #header>
          运行容器
        </template>

        <UBadge variant="soft">
          docker run -d -p 8080:3000 --name my-running-app your-image-name
        </UBadge>
      </UCard>

      <UCard>
        <template #header>
          推送镜像
          <p class="text-sm text-gray-400">
            如果部署方式需要推送镜像，可以先将镜像标签改为新的标签，然后推送到 Docker 镜像仓库。
          </p>
        </template>

        <div class="space-y-2">
          <UBadge variant="soft">
            docker tag your-image-name your-new-image-name
          </UBadge>
          <br>
          <UBadge variant="soft">
            docker push your-new-image-name
          </UBadge>
        </div>
      </UCard>
    </template>
  </UDashboardPanel>
</template>
