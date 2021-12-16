<template>
  <q-page class="q-pa-md" style="background-color:#EAF3FD;">
     <div>Principales Noticias Del Día</div>
    <div class="q-ma-lg row justify-start items-start q-gutter-sm">
      <NoticiaGenericaCard
        v-for="noticia in noticiasImportantes"
        :noticia="noticia"
        :key="noticia.id"
      />
    </div>

  </q-page>
</template>

<script>
import NoticiaGenericaCard from '../components/noticias/NoticiaGenericaCard.vue'
export default {
  components: {
    NoticiaGenericaCard
  },
  computed: {
    noticiasImportantes: function () {
      var noticias = {}
      var noticiasEconomia = this.$store.getters['noticiasEconomia/getEconomia']
      var noticiasCultura = this.$store.getters['noticiasCultura/getCultura']
      Object.assign(noticias, noticiasEconomia, noticiasCultura)
      return noticias
    }
  }
}
</script>
