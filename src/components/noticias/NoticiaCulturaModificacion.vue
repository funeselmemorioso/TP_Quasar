<template>
  <q-card>
     <q-card-section class="row q-mx-md">
      <div class="text-h6">Editar Noticia Cultura</div>
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
        <FormId :id="id" ref="id"  />
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
import FormId from '../comunes/FormId.vue'
import FormTitulo from '../comunes/FormTitulo.vue'
import FormSubTitulo from '../comunes/FormSubTitulo.vue'
import FormCuerpo from '../comunes/FormCuerpo.vue'
import FormAutor from '../comunes/FormAutor.vue'
import { mapActions } from 'vuex'
import { EDITARCULTURA } from 'src/store/noticiasCultura/types'

export default {
  name: 'NoticiaABM',
  props: ['titulo', 'subTitulo', 'cuerpo', 'autor', 'id', 'imagen'],
  components: {
    FormId,
    FormTitulo,
    FormSubTitulo,
    FormCuerpo,
    FormAutor
  },
  data () { 
      return {   
        cultura: {
            id: this.id,
            titulo: this.titulo,
            subTitulo: this.subTitulo,
            cuerpo: this.cuerpo,
            autor: this.autor,
            fecha: '2021/11/05',
            importancia: 0,
            favorita: 0,
            imagen: this.imagen
        }
    }
  }, 
  methods: {
    ...mapActions('noticiasCultura', [EDITARCULTURA]),
    submitForm: function () {
      console.log('editar - Cultura')
      this.editarCultura(this.cultura)
      console.log(this.cultura)
      this.$q.notify({
        message: 'Noticia editada OK'
      })
      this.$emit('closeEditarCultura')
    }
  }
}
</script>
