<template>
  <div class="row q-mb-none">
    <q-input
      standout="bg-primary text-white"
      class="col"
      label="Sub Titulo"
      ref="subTitulo"
      :modelValue="subTitulo"
      @update:modelValue="event => $emit('update:subTitulo', event)"
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
  props: ['subTitulo']
}
</script>
