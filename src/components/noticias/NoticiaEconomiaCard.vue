<template>
    <div class="q-pa-md row items-start q-gutter-md">
        <q-card class="my-card" >
            <img :src= noticia.imagen >

            <q-card-section>
                <div class="text-h6" style="display:none;">{{ id }}</div>
                <div class="text-h6">{{ noticia.titulo }}</div>
                <div class="text-subtitle2">Por {{noticia.autor}}</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                {{ noticia.cuerpo }}
            </q-card-section>
            <div style="width:100%; background-color:red;">
                <div style="float:right;" v-if="logueado">
                    <q-btn
                    icon="settings"
                    flat
                    color="warning"
                    @click="noticiaEditar"
                    />
                    <q-btn
                    icon="delete"
                    flat
                    color="negative"
                    @click="confirmarEliminar"
                    />
                </div>
            </div>
        </q-card>
         <q-dialog v-model="editarNoticiaEconomia" persistent>
          <NoticiaEconomiaModificacion
            @closeEditarEconomia = "editarNoticiaEconomia=false"
            :autor="noticia.autor"
            :id = "id"
            :cuerpo="noticia.cuerpo"
            :subTitulo="noticia.subtitulo"
            :titulo="noticia.titulo"
            :imagen="noticia.imagen"            
          />
        </q-dialog>
    </div>
</template>

<script>
import { ELIMINARECONOMIA } from 'src/store/noticiasEconomia/types'
import { mapActions } from 'vuex'
import NoticiaEconomiaModificacion from '../noticias/NoticiaEconomiaModificacion.vue'

export default {
  name: 'NoticiaCard',
   components: {
    NoticiaEconomiaModificacion        
  },
   data () {
    return {     
      editarNoticiaEconomia : false
    }
  },
  props: ['noticia', 'id', 'logueado'],
  methods: {
    ...mapActions('noticiasEconomia', [ELIMINARECONOMIA]),
    confirmarEliminar () {
      this.$q.dialog({
        title: 'Eliminar',
        message: 'Confrima la eliminación?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.eliminarEconomia(this.id)
      })
    },
    noticiaEditar(){
      console.log('EDITAR LA NOTICIA' + this.id);
      this.editarNoticiaEconomia = true;
    } 
  }
}
</script>
