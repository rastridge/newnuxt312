<script setup>
  import { useAlertStore } from '~/stores/alertStore'
  definePageMeta({
    middleware: ['auth'],
  })
  const alert = useAlertStore()
  const { onSubmitEdit } = useSubmit()

  //
  // Get account id to edit
  //
  const route = useRoute()
  const id = route.params.id
  //
  // Accounts form action
  //
  const onSubmit = async function (form_state) {
    alert.clear()
    await onSubmitEdit('accounts', form_state)
    if (alert.message === null) {
      navigateTo(`/admin/accounts/men`)
    }
  }
</script>

<template>
  <div>
    <Head>
      <Title>Edit Member Account</Title>
    </Head>
    <div class="topsectioncenter">
      <div class="topsectionitem">
        <display-admin-header title="Edit Member Account" />
      </div>
      <accounts-form
        :id="id"
        @submitted="onSubmit"
      />
    </div>
  </div>
</template>
