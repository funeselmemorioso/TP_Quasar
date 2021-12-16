<template>
  <q-page class="q-pa-md">
    <div style="width:100%;">
      <div style="margin-left:15px;">
        <q-btn
          v-on:click="agregarNoticiaEconomia=true"
          icon="edit"
          color="primary"
          class=" q-mx-lg on-left"
          label="Escribir"
          v-if="logueado"
        />
      </div>
    </div>
    <div class="q-ma-lg row justify-start items-start q-gutter-sm">
      <NoticiaEconomiaCard
        v-for="(noticia, id) in economia"
        :noticia="noticia"
        :logueado="logueado"
        :id="id"
        :key="id"
      />
    </div>
    <q-dialog v-model="agregarNoticiaEconomia" persistent>
      <NoticiaEconomiaAlta
       @closeAltaEconomia = "agregarNoticiaEconomia=false"
      />
    </q-dialog>
  </q-page>
</template>

<script>
import NoticiaEconomiaCard from '../components/noticias/NoticiaEconomiaCard.vue'
import NoticiaEconomiaAlta from '../components/noticias/NoticiaEconomiaAlta.vue'
export default {
  components: {
    NoticiaEconomiaCard,
    NoticiaEconomiaAlta
  },
  data () {
    return {
      agregarNoticiaEconomia: false
    }
  },
  computed: {
    economia: function () {
      const noticias = this.$store.getters['noticiasEconomia/getEconomia']
      console.log(noticias)
      return noticias
    },
    logueado: function () {
      const usuario = this.$store.getters['usuarios/getUsuario']
      return usuario.logueado
    }
  },
  watch: {
    agregarNoticia: function () {
      console.log(this.agregarNoticiaEconomia)
    }
  }
}
</script>
