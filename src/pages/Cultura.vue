<template>
  <q-page class="q-pa-md">
    <div style="width:100%;">
      <div style="margin-left:15px;">
        <q-btn
          v-on:click="agregarNoticiaCultura=true"
          icon="edit"
          color="primary"
          class=" q-mx-lg on-left"
          label="Escribir"
          v-if="logueado"
        />
      </div>
    </div>
    <div class="q-ma-lg row justify-start items-start q-gutter-sm">
      <NoticiaCulturaCard
        v-for="(noticia, id) in cultura"
        :noticia="noticia"
        :logueado="logueado"
        :key="id"
        :id="id"
      />
    </div>
    <q-dialog v-model="agregarNoticiaCultura" persistent>
      <NoticiaCulturaAlta
        @closeAltaCultura = "agregarNoticiaCultura=false"        
      />
    </q-dialog>
    
  </q-page>
</template>

<script>
import NoticiaCulturaCard from '../components/noticias/NoticiaCulturaCard.vue'
import NoticiaCulturaAlta from '../components/noticias/NoticiaCulturaAlta.vue'

export default {
  components: {
    NoticiaCulturaCard,
    NoticiaCulturaAlta    
  },
  data () {
    return {
      agregarNoticiaCultura: false,
      editarNoticiaCultura : false
    }
  },
  computed: {
    cultura: function () {
      const noticias = this.$store.getters['noticiasCultura/getCultura']
      console.log('traer noticias cultura')
      console.log(noticias)
      return noticias
    },
    logueado: function () {
      const usuario = this.$store.getters['usuarios/getUsuario']
      console.log('el usuario')
      console.log(usuario)
      return usuario.logueado
    }
  },
  watch: {
    agregarCultura: function () {
      // console.log(this.agregarCultura)
    }
  }
}
</script>
