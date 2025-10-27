<script setup lang="ts">
import type { NavigationMenuItem } from '@nuxt/ui'

const open = ref(false)

const links = [
  {
    label: 'Home',
    icon: 'i-lucide-house',
    to: '/dashboard/home',
    onSelect: () => {
      open.value = false
    }
  },
  {
    label: 'Token',
    icon: 'i-lucide-key',
    to: '/dashboard/token',
    onSelect: () => {
      open.value = false
    }
  },
  {
    label: 'Icon',
    icon: 'i-lucide-star',
    to: '/dashboard/icon',
    onSelect: () => {
      open.value = false
    }
  },
  {
    label: 'Request',
    icon: 'carbon:data-1',
    to: '/dashboard/request',
    onSelect: () => {
      open.value = false
    }
  },
  {
    label: 'Form',
    icon: 'fluent:form-20-regular',
    to: '/dashboard/form',
    onSelect: () => {
      open.value = false
    }
  },
  {
    label: 'Git',
    icon: 'iconoir:git',
    to: '/dashboard/git',
    onSelect: () => {
      open.value = false
    }
  },
  {
    label: 'Docker',
    icon: 'mdi:docker',
    to: '/dashboard/docker',
    onSelect: () => {
      open.value = false
    }
  }
] satisfies NavigationMenuItem[]

const groups = computed(() => [{
  id: 'links',
  label: 'Go to',
  items: links.flat()
}])
</script>

<template>
  <UDashboardGroup unit="rem">
    <UDashboardSidebar
      id="default"
      v-model:open="open"
      collapsible
      resizable
      class="bg-elevated/25"
      :ui="{ footer: 'lg:border-t lg:border-default' }"
    >
      <template #default="{ collapsed }">
        <UDashboardSearchButton
          :collapsed="collapsed"
          class="bg-transparent ring-default"
        />

        <UNavigationMenu
          :collapsed="collapsed"
          :items="links"
          orientation="vertical"
          tooltip
          popover
        />
      </template>
    </UDashboardSidebar>

    <UDashboardSearch :groups="groups" />

    <slot />
  </UDashboardGroup>
</template>
