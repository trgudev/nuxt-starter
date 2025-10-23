<script setup lang="ts">
const page = ref({
  features: {
    title: 'Everything You Need to Ship',
    description: 'Stop building from scratch. Focus on your unique features while Nuxt UI handles the foundations with battle-tested components and patterns.',
    items: [
      {
        title: 'Beautiful Design System',
        description: 'Semantic color aliases, comprehensive design tokens, and Tailwind Variants for consistent, customizable styling.',
        icon: 'i-lucide-palette'
      },
      {
        title: 'Accessible by Default',
        description: 'Built on Reka UI for robust accessibility. WCAG compliant components that work for everyone, everywhere.',
        icon: 'i-lucide-accessibility'
      },
      {
        title: 'Developer Experience',
        description: 'Auto-imports, hot module replacement, and comprehensive documentation. Build faster with less friction.',
        icon: 'i-lucide-terminal'
      },
      {
        title: 'SEO Optimized',
        description: 'Server-side rendering, automatic meta tags, sitemap generation, and Open Graph images out of the box.',
        icon: 'i-lucide-search'
      },
      {
        title: 'Production Ready',
        description: 'Error handling, loading states, form validation, and security best practices built into every component.',
        icon: 'i-lucide-check-circle'
      },
      {
        title: 'Infinitely Customizable',
        description: 'Override any style with the ui prop, customize globally with AppConfig, or use Tailwind classes directly.',
        icon: 'i-lucide-settings'
      }
    ]
  },
  sections: [
    {
      title: 'Powered by Nuxt UI Components',
      description: 'Access the complete Nuxt UI component library with 100+ beautifully styled, accessible, and customizable Vue components. Everything you need to build professional SaaS applications.',
      id: 'features',
      orientation: 'horizontal',
      features: [
        {
          name: '100+ UI Components',
          description: 'From buttons to modals, data tables to forms - all styled with Tailwind CSS and accessible out of the box.',
          icon: 'i-lucide-package'
        },
        {
          name: 'Authentication Ready',
          description: 'Pre-built login, signup, and password reset flows. Just connect your backend and start onboarding users.',
          icon: 'i-lucide-shield'
        },
        {
          name: 'TypeScript First',
          description: 'Full TypeScript support with auto-completion, type safety, and IntelliSense for every component and composable.',
          icon: 'i-lucide-code-2'
        }
      ]
    },
    {
      title: 'Built for Modern SaaS',
      description: 'Everything you need to launch and scale your SaaS. From beautiful marketing pages to complex dashboards, ship faster with production-ready patterns.',
      orientation: 'horizontal',
      reverse: true,
      features: [
        {
          name: 'Edge Performance',
          description: 'Optimized for Core Web Vitals with automatic code splitting, lazy loading, and SSR/SSG support.',
          icon: 'i-lucide-zap'
        },
        {
          name: 'Dark Mode Ready',
          description: 'Automatic theme switching with smooth transitions. Respects system preferences and remembers user choice.',
          icon: 'i-lucide-moon'
        },
        {
          name: 'Global Ready',
          description: 'Built-in i18n support for 50+ languages with RTL/LTR layouts and @nuxt/fonts integration.',
          icon: 'i-lucide-globe'
        }
      ]
    }
  ]
})

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
