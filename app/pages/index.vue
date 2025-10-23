<script setup lang="ts">
import { fetchGetHomePage } from '~/api/home'

const { data: page } = await fetchGetHomePage()

const title = 'Nuxt UI Starter Template'
const description = 'Create stunning, fast and production-ready SaaS applications with Nuxt UI. 100+ Vue components, authentication, dark mode, and enterprise features built on Tailwind CSS.'

useSeoMeta({
  titleTemplate: '',
  title,
  ogTitle: title,
  description,
  ogDescription: description
})
</script>

<template>
  <div v-if="page">
    <UPageHero
      :title="title"
      :description="description"
    >
      <template #top>
        <HeroBackground />
      </template>
    </UPageHero>

    <UPageSection
      v-for="(section, index) in page.sections"
      :key="index"
      :title="section.title"
      :description="section.description"
      :orientation="section.orientation as 'horizontal'"
      :reverse="section.reverse"
      :features="section.features"
    >
      <ImagePlaceholder />
    </UPageSection>

    <UPageSection
      :title="page.features.title"
      :description="page.features.description"
    >
      <UPageGrid>
        <UPageCard
          v-for="(item, index) in page.features.items"
          :key="index"
          v-bind="item"
          spotlight
        />
      </UPageGrid>
    </UPageSection>
  </div>
</template>
