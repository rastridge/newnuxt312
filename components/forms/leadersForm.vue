<template>
  <div class="my-form-style">
    <FormKit
      v-model="state"
      type="form"
      submit-label="Submit"
      @submit="submitForm(state)"
    >
      <FormKit
        type="text"
        label="Year"
        name="leaders_year"
        :disabled="year_disabled"
        validation="required|number|between:1965,2050"
        validation-visibility="live"
      />
      <div
        v-if="!goodyear"
        class="alert-danger"
      >
        Year {{ state.leaders_year }} already exists
      </div>

      <FormKit
        label="President"
        name="president"
        type="text"
        value=""
      />
      <FormKit
        label="Vice President"
        name="vice_president"
        type="text"
        value=""
      />
      <FormKit
        label="Secretary"
        name="secretary"
        type="text"
        value=""
      />
      <FormKit
        label="Match Secretary"
        name="match_secretary"
        type="text"
        value=""
      />
      <FormKit
        label="Treasurer"
        name="treasurer"
        type="text"
        value=""
      />
      <FormKit
        label="Social Chair"
        name="social_chairman"
        type="text"
        value=""
      />
      <FormKit
        label="Spring Capt"
        name="spring_captain"
        type="text"
        value=""
      />
      <FormKit
        label="Fall Capt"
        name="fall_captain"
        type="text"
        value=""
      />
      <FormKit
        label="Coach"
        name="coach"
        type="text"
        value=""
      />
      <FormKit
        label="Asst Coach"
        name="assistant_coach"
        type="text"
        value=""
      />
      <FormKit
        label="Chair BOD"
        name="chair_bod"
        type="text"
        value=""
      />
      <display-cancelform :destination="'/admin/leaders'" />
    </FormKit>

    <p v-if="saving">
      <ProgressBar
        mode="indeterminate"
        style="height: 6px"
      ></ProgressBar>
      Saving ...
    </p>
  </div>
  <!-- </div> -->
</template>

<script setup>
  import { useAuthStore } from '~/stores/authStore'
  const auth = useAuthStore()
  const saving = ref(false)
  const year_disabled = ref(false)
  const years = ref([])

  //
  // Outgoing
  //
  const emit = defineEmits(['submitted'])
  //
  // Incoming
  //
  const props = defineProps({
    id: { type: String, default: '0' },
  })
  const edit_form = props.id !== '0'

  //
  // Initialize form
  //
  const state = ref({})

  const goodyear = computed(() => {
    const year = years.value.find(
      (u) => u.leaders_year == state.value.leaders_year,
    )
    return !year
  })
  //
  // edit if there is an id - add if not
  //
  if (edit_form) {
    // get opponent with id === props.id
    const { data } = await useFetch(`/leaders/${props.id}`, {
      key: props.id,
      method: 'get',
      headers: {
        authorization: auth.user.token,
      },
    })
    state.value = data.value
    // year exists - can't be changed
    year_disabled.value = true
  } else {
    const { data } = await useFetch(`/leaders/getyears`, {
      method: 'get',
      headers: {
        authorization: auth.user.token,
      },
    })
    years.value = data.value
  }

  //
  // form handlers
  //

  const submitForm = (state) => {
    saving.value = true
    emit('submitted', state)
  }
</script>
