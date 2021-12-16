<template>
  <div class="row q-mb-none">
    <q-input
      standout="bg-primary text-white"
      class="col"
      label="Cuerpo"
      ref="cuerpo"
      :modelValue="cuerpo"
      @update:modelValue="event => $emit('update:cuerpo', event)"
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
  props: ['cuerpo']
}
</script>
