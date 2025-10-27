<script setup lang="ts">
const { links, open } = useLinks()

const groups = computed(() => [{
  id: 'links',
  label: 'Go to',
  items: links.flat()
}])

useSeoMeta({
  title: 'Dashboard',
  ogTitle: 'Dashboard',
  description: 'Dashboard for Nuxt Starter',
  ogDescription: 'Dashboard for Nuxt Starter'
})
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
