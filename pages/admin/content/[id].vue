<script setup>
  definePageMeta({
    middleware: ['auth'],
  })
  const { onSubmitEdit } = useSubmit()
  //
  // Get content item id
  //
  const route = useRoute()
  const id = route.params.id

  //
  // content form action
  //
  const onSubmit = async function (form_state) {
    await onSubmitEdit('content', form_state)
    navigateTo(`/admin/content`)
  }
</script>

<template>
  <div>
    <Head>
      <Title>Edit custom page</Title>
    </Head>

    <div class="topsectioncenter">
      <div class="topsectionitem">
        <display-admin-header title="Edit custom page" />
      </div>
      <content-form
        :id="id"
        @submitted="onSubmit"
      />
    </div>
  </div>
</template>
