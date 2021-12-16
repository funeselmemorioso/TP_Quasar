<template>
  <div>
    <q-input
      :value="apellido"
      label="Apellido"
      ref="apellido"
      class="col"
    >
      <template v-slot:append>
        <q-icon
        name="event"
        class="cursor-pointer"
        />
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  props: ['apellido']
}
</script>
