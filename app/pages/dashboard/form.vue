<script setup lang='ts'>
import * as z from 'zod'
import type { FormSubmitEvent } from '@nuxt/ui'

definePageMeta({
  layout: 'dashboard'
})

defineOptions({
  name: 'DashboardForm'
})

const schema = z.object({
  email: z.email('Invalid email'),
  password: z.string('Password is required').min(8, 'Must be at least 8 characters')
})

type Schema = z.output<typeof schema>

const state = reactive<Partial<Schema>>({
  email: undefined,
  password: undefined
})

const toast = useToast()
async function onSubmit(event: FormSubmitEvent<Schema>) {
  toast.add({ title: 'Success', description: 'The form has been submitted.', color: 'success' })
  console.log(event.data)
}
</script>

<template>
  <UDashboardPanel id="form">
    <template #header>
      <UDashboardNavbar
        title="Form"
        :ui="{ right: 'gap-3' }"
      >
        <template #leading>
          <UDashboardSidebarCollapse />
        </template>
      </UDashboardNavbar>
    </template>

    <template #body>
      <UCard variant="outline">
        <template #header>
          Form 验证
          <p class="text-sm text-gray-400">
            在项目的隐式依赖中已经存在 zod 库，用于表单验证
          </p>
        </template>

        <UForm
          :schema="schema"
          :state="state"
          class="space-y-4"
          @submit="onSubmit"
        >
          <UFormField
            label="Email"
            name="email"
          >
            <UInput v-model="state.email" />
          </UFormField>

          <UFormField
            label="Password"
            name="password"
          >
            <UInput
              v-model="state.password"
              type="password"
            />
          </UFormField>

          <UButton type="submit">
            Submit
          </UButton>
        </UForm>
      </UCard>
    </template>
  </UDashboardPanel>
</template>
