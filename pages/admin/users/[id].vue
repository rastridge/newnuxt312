<template>
  <div>
    <Head>
      <Title>Edit User</Title>
    </Head>
    <div class="topsectioncenter">
      <div class="topsectionitem"></div>
    </div>

    <div class="topsectioncenter">
      <div class="topsectionitem">
        <display-admin-header title="Edit User" />
      </div>
      <user-form
        :id="id"
        @submitted="onSubmit"
      />
    </div>
  </div>
</template>

<script setup>
  import { useAlertStore } from '~/stores/alertStore'
  definePageMeta({
    middleware: ['auth'],
  })
  const alert = useAlertStore()
  const { onSubmitEdit } = useSubmit()
  //
  // Get user id
  //
  const route = useRoute()
  const id = route.params.id

  //
  // Users form action
  //
  const onSubmit = async function (form_state) {
    alert.clear()
    await onSubmitEdit('users', form_state)
    if (alert.message === null) {
      navigateTo('/admin/users')
    }
  }
</script>
