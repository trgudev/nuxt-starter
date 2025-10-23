<script setup lang="ts">
const versions = ref([
  {
    id: 'versions/4.changelog/10.fun.md',
    title: 'Clippy Integration (Beta) 🐤',
    date: '2025-04-01T00:00:00.000Z',
    description: 'Meet your new productivity assistant! For April Fools\' Day, we\'re introducing Clippy, your friendly (and slightly mischievous) helper. He\'s here to make your day a little brighter—and maybe a little more chaotic.',
    extension: 'md',
    image: 'https://images.unsplash.com/photo-1503676382389-4809596d5290?auto=format&fit=crop&w=800&q=80',
    meta: {},
    navigation: true,
    path: '/changelog/fun',
    seo: {
      title: 'Clippy Integration (Beta) 🐤',
      description: 'Meet your new productivity assistant! For April Fools\' Day, we\'re introducing Clippy, your friendly (and slightly mischievous) helper. He\'s here to make your day a little brighter—and maybe a little more chaotic.'
    },
    stem: '4.changelog/10.fun',
    __hash__: 'fyQg9fI6T6qptIO09LTDTEP7bU7XmLxsmgdPTnGsD2o'
  },
  {
    id: 'versions/4.changelog/9.security.md',
    title: 'Security Enhancements 🔒',
    date: '2024-11-12T00:00:00.000Z',
    description: 'Your data is safer than ever. We\'ve rolled out new security features and compliance updates.',
    extension: 'md',
    image: 'https://images.unsplash.com/photo-1510511459019-5dda7724fd87?auto=format&fit=crop&w=800&q=80',
    meta: {},
    navigation: true,
    path: '/changelog/security',
    seo: {
      title: 'Security Enhancements 🔒',
      description: 'Your data is safer than ever. We\'ve rolled out new security features and compliance updates.'
    },
    stem: '4.changelog/9.security',
    __hash__: 'PMLXwddhdEuJvtgr014Ehwqu0MIIN5tpHnuEcZasXDA'
  },
  {
    id: 'versions/4.changelog/8.api.md',
    title: 'Public API Now Available 🛠️',
    date: '2024-10-25T00:00:00.000Z',
    description: 'Build your own integrations and automate workflows with our brand new public API.',
    extension: 'md',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800&q=80',
    meta: {},
    navigation: true,
    path: '/changelog/api',
    seo: {
      title: 'Public API Now Available 🛠️',
      description: 'Build your own integrations and automate workflows with our brand new public API.'
    },
    stem: '4.changelog/8.api',
    __hash__: '__puU95TDSE3QNfT87Q1x2r0vo4P5-vt3z0y3I6nrbo'
  },
  {
    id: 'versions/4.changelog/7.analytics.md',
    title: 'Advanced Analytics 📊',
    date: '2024-10-05T00:00:00.000Z',
    description: 'Gain deeper insights into your business with our new analytics dashboard. Track key metrics and visualize your growth.',
    extension: 'md',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    meta: {},
    navigation: true,
    path: '/changelog/analytics',
    seo: {
      title: 'Advanced Analytics 📊',
      description: 'Gain deeper insights into your business with our new analytics dashboard. Track key metrics and visualize your growth.'
    },
    stem: '4.changelog/7.analytics',
    __hash__: 'x8VfLE4DzKlGSRCyCuxgJs7bsF1U_XcA__Us3ejxqI4'
  },
  {
    id: 'versions/4.changelog/6.performance.md',
    title: 'Performance Boost ⚡️',
    date: '2024-09-15T00:00:00.000Z',
    description: 'Our SaaS just got a whole lot faster! Enjoy snappier load times and smoother navigation across the app.',
    extension: 'md',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    meta: {},
    navigation: true,
    path: '/changelog/performance',
    seo: {
      title: 'Performance Boost ⚡️',
      description: 'Our SaaS just got a whole lot faster! Enjoy snappier load times and smoother navigation across the app.'
    },
    stem: '4.changelog/6.performance',
    __hash__: 'pXJxA5aBTQMBTjNVwTRTfU-uHR84A3d5DePuPCWav-4'
  },
  {
    id: 'versions/4.changelog/5.mobile.md',
    title: 'Mobile App Beta 📱',
    date: '2024-08-30T00:00:00.000Z',
    description: 'Access your dashboard on the go! Our mobile app beta is now open for all users. Available on iOS and Android.',
    extension: 'md',
    image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?auto=format&fit=crop&w=800&q=80',
    meta: {},
    navigation: true,
    path: '/changelog/mobile',
    seo: {
      title: 'Mobile App Beta 📱',
      description: 'Access your dashboard on the go! Our mobile app beta is now open for all users. Available on iOS and Android.'
    },
    stem: '4.changelog/5.mobile',
    __hash__: '8Q8Sg8I2gRla0fSPbp9FyARPx2ca6pst8JXMSBoJHrY'
  },
  {
    id: 'versions/4.changelog/4.integrations.md',
    title: 'Integrations Galore',
    date: '2024-07-20T00:00:00.000Z',
    description: 'Connect your favorite tools! We now support integrations with Slack, GitHub, and Zapier. Automate your workflow with ease.',
    extension: 'md',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80',
    meta: {},
    navigation: true,
    path: '/changelog/integrations',
    seo: {
      title: 'Integrations Galore',
      description: 'Connect your favorite tools! We now support integrations with Slack, GitHub, and Zapier. Automate your workflow with ease.'
    },
    stem: '4.changelog/4.integrations',
    __hash__: 'U0o777tHG0SQhiy2mjUsM6AifLVI16C7gDJc4wM6bIs'
  },
  {
    id: 'versions/4.changelog/3.dark-mode.md',
    title: 'Dark Mode 🌙',
    date: '2024-06-15T00:00:00.000Z',
    description: 'Your eyes will thank you! Switch between light and dark themes with a single click. Fully integrated with Nuxt UI.',
    extension: 'md',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80',
    meta: {},
    navigation: true,
    path: '/changelog/dark-mode',
    seo: {
      title: 'Dark Mode 🌙',
      description: 'Your eyes will thank you! Switch between light and dark themes with a single click. Fully integrated with Nuxt UI.'
    },
    stem: '4.changelog/3.dark-mode',
    __hash__: 'kRMb0wWdkYlD1irgDYQokM3lEDhxXrfG4pT9Juog0Vw'
  },
  {
    id: 'versions/4.changelog/2.teams.md',
    title: 'Teams & Collaboration',
    date: '2024-05-10T00:00:00.000Z',
    description: 'Introducing Teams! Invite colleagues, assign roles, and collaborate in real-time. Perfect for startups and growing businesses.',
    extension: 'md',
    image: 'https://images.unsplash.com/photo-1518609878373-06d740f60d8b?auto=format&fit=crop&w=800&q=80',
    meta: {},
    navigation: true,
    path: '/changelog/teams',
    seo: {
      title: 'Teams & Collaboration',
      description: 'Introducing Teams! Invite colleagues, assign roles, and collaborate in real-time. Perfect for startups and growing businesses.'
    },
    stem: '4.changelog/2.teams',
    __hash__: 'yr2RwLAuNMpT7WI4PnOPiYm26XL68kx-iicglERpoqc'
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
      <UChangelogVersions>
        <UChangelogVersion
          v-for="(version, index) in versions"
          :key="index"
          v-bind="version"
        />
      </UChangelogVersions>
    </UPageBody>
  </UContainer>
</template>
