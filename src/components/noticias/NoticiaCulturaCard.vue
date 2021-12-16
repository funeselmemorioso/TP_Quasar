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
        <q-dialog v-model="editarNoticiaCultura" persistent>
          <NoticiaCulturaModificacion
            @closeEditarCultura = "editarNoticiaCultura=false"
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
import { ELIMINARCULTURA } from 'src/store/noticiasCultura/types'
import { mapActions } from 'vuex'
import NoticiaCulturaModificacion from '../noticias/NoticiaCulturaModificacion.vue'

export default {
  name: 'NoticiaCard',
  components: {
    NoticiaCulturaModificacion        
  },
   data () {
    return {     
      editarNoticiaCultura : false
    }
  },
  props: ['noticia', 'id', 'logueado'],
  methods: {
    ...mapActions('noticiasCultura', [ELIMINARCULTURA]),
    confirmarEliminar () {
      this.$q.dialog({
        title: 'Eliminar',
        message: 'Confrima la eliminación?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.eliminarCultura(this.id)
      })
    },
    noticiaEditar(){
      console.log('EDITAR LA NOTICIA' + this.id);
      this.editarNoticiaCultura = true;
    }    
  }
}
</script>
