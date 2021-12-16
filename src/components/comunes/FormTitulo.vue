<template>
  <div class="row q-mb-none">
    <q-input
      standout="bg-primary text-white"
      class="col"
      label="Titulo"
      ref="titulo"
      :modelValue="titulo"
      @update:modelValue="event => $emit('update:titulo', event)"
    >
      <template v-slot:append>
        <q-icon
        name="close"
        class="cursor-pointer"
        />
      </template>
    </q-input>
  </div>
</template>

<script>
export default {
  props: ['titulo']
}
</script>
