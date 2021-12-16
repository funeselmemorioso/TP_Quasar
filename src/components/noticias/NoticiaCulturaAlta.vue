<template>
  <q-card>
     <q-card-section class="row q-mx-md">
      <div class="text-h6">Agregar Noticia</div>
      <q-space />
      <q-btn
        v-close-popup
        flat
        round
        dense
        icon="close" />
    </q-card-section>
    <form v-on:submit="submitForm">
      <q-card-section class="q-mx-md q-gutter-md">
        <FormTitulo v-model:titulo="cultura.titulo" ref="titulo" />
        <FormSubTitulo v-model:subTitulo="cultura.subTitulo" ref="subTitulo" />
        <FormCuerpo v-model:cuerpo="cultura.cuerpo" ref="cuerpo"/>
        <FormAutor v-model:autor="cultura.autor" ref="autor" />
      </q-card-section>
      <q-card-actions align="right" class="  q-mb-sm q-px-md text-primary">
        <q-btn
          icon="cancel"
          flat
          color="negative"
          label="Cancelar"
          v-close-popup
        />
        <q-btn
          icon="check"
          flat
          color="positive"
          label="Aceptar"
          type="submit"
        />
      </q-card-actions>
    </form>
  </q-card>
</template>

<script>
import FormTitulo from '../comunes/FormTitulo.vue'
import FormSubTitulo from '../comunes/FormSubTitulo.vue'
import FormCuerpo from '../comunes/FormCuerpo.vue'
import FormAutor from '../comunes/FormAutor.vue'
import { mapActions } from 'vuex'
import { AGREGARCULTURA } from 'src/store/noticiasCultura/types'

export default {
  name: 'NoticiaABM',
  components: {
    FormTitulo,
    FormSubTitulo,
    FormCuerpo,
    FormAutor
  },
  data () {
    return {
      cultura: {
        id: Math.random() * 100,
        titulo: '',
        subTitulo: '',
        cuerpo: '',
        autor: '',
        fecha: '2021/11/05',
        importancia: 0,
        favorita: 0,
        imagen: 'https://thumbs.dreamstime.com/b/globe-news-background-generic-k-red-abstract-88317816.jpg'
      }
    }
  },
  methods: {
    ...mapActions('noticiasCultura', [AGREGARCULTURA]),
    submitForm: function () {
      console.log('agregar - ABM Cultura')
      this.agregarCultura(this.cultura)
      this.$q.notify({
        message: 'Noticia Agregada OK'
      })
      this.$emit('closeAltaCultura')
    }
  }
}
</script>
