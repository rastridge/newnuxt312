<script setup>
  definePageMeta({
    middleware: ['auth'],
  })

  const { onSubmitEdit } = useSubmit()

  //
  // Get archives item id
  //
  const route = useRoute()
  const id = route.params.id

  //
  // archives form action
  //
  const onSubmit = async function (form_state) {
    await onSubmitEdit('clubhouse', form_state)
    navigateTo(`/admin/clubhouse`)
  }
</script>

<template>
  <div>
    <Head>
      <Title>Edit clubhouse Item </Title>
    </Head>
    <div class="topsectioncenter">
      <div class="topsectionitem">
        <display-admin-header title="Edit clubhouse item" />
      </div>
      <clubhouse-form
        :id="id"
        @submitted="onSubmit"
      />
    </div>
  </div>
</template>
