<script setup lang="ts">
const title = 'Docs'
const description = 'Discover the latest insights, tutorials, and updates from our team. Stay informed about web development trends, best practices, and innovative solutions.'

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})
</script>

<template>
  <UContainer v-loading="true">
    <UPageHeader
      :title
      :description
      class="py-[50px]"
    />
  </UContainer>
</template>
