<script setup>
  import Swal from 'sweetalert2'
  definePageMeta({
    middleware: ['auth'],
  })

  const { addNewsletter } = useNewsletter()

  //
  // Newsletters form action
  //
  const onSubmit = async function (state) {
    Swal.fire({
      title: 'What to do?',
      showDenyButton: true,
      showCancelButton: true,
      showConfirmButton: true,
      confirmButtonText: `Send now`,
      denyButtonText: `Send later`,
    }).then((result) => {
      if (result.isConfirmed) {
        addNewsletter(state, 'sendNow')
        Swal.fire('Saved and Sent', '', 'success')
        // navigateTo('/admin/newsletters')
      } else if (result.isDenied) {
        addNewsletter(state, 'sendLater')
        Swal.fire('Saved', '', 'success')
        // navigateTo('/admin/newsletters')
      } else if (result.isDismissed) {
        // navigateTo('/admin/newsletters')
      }
      navigateTo('/admin/newsletters')
    })
  }
</script>

<template>
  <div>
    <Head>
      <Title>Add Newsletter</Title>
    </Head>

    <div class="topsectioncenter">
      <div class="topsectionitem">
        <display-admin-header title="Add Newsletter" />
      </div>
      <newsletters-form @submitted="onSubmit" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  @import 'sweetalert2/src/sweetalert2.scss';
</style>
