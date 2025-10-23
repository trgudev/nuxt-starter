<script setup lang="ts">
const versions = ref([
  {
    title: 'Nuxt 3.17',
    description: 'Nuxt 3.17 is out - bringing a major reworking of the async data layer, a new built-in component, better warnings, and performance improvements!',
    image: 'https://nuxt.com/assets/blog/v3.17.png',
    date: '2025-04-27',
    to: 'https://nuxt.com/blog/v3-17',
    target: '_blank',
    ui: {
      container: 'max-w-lg'
    }
  },
  {
    title: 'Nuxt 3.16',
    description: 'Nuxt 3.16 is out - packed with features and performance improvements!',
    image: 'https://nuxt.com/assets/blog/v3.16.png',
    date: '2025-03-07',
    to: 'https://nuxt.com/blog/v3-16',
    target: '_blank',
    ui: {
      container: 'max-w-lg'
    }
  },
  {
    title: 'Nuxt 3.15',
    description: 'Nuxt 3.15 is out - with Vite 6, better HMR and faster performance!',
    image: 'https://nuxt.com/assets/blog/v3.15.png',
    date: '2024-12-24',
    to: 'https://nuxt.com/blog/v3-15',
    target: '_blank',
    ui: {
      container: 'max-w-lg'
    }
  }
])

const title = 'Changelog'
const description = 'Stay up-to-date with the latest changes, improvements, and features our SaaS platform has to offer. Follow our changelog to keep track of what\'s new and what\'s coming next.'

useSeoMeta({
  title,
  ogTitle: title,
  description,
  ogDescription: description
})
</script>

<template>
  <UContainer>
    <UPageHeader
      title="Changelog"
      description="Stay up-to-date with the latest changes, improvements, and features our SaaS platform has to offer. Follow our changelog to keep track of what's new and what's coming next."
      class="py-[50px]"
    />

    <UPageBody>
      <UChangelogVersions :versions="versions" />
    </UPageBody>
  </UContainer>
</template>
