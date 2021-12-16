<template>
  <q-page class="q-pa-md" style="background-color:#F6F6F6;">
    <div class="q-ma-lg row justify-center items-start q-gutter-sm">
        <div class="row">
            <q-img src="https://www.nicepng.com/png/detail/333-3332580_typewriter-with-tablet-icon-maquina-de-escribir-icon.png" style="width: 200px; height:200px;"/>
        </div>
      <div class="row">
        <div v-if="logueado">
         <q-btn color="secondary"
          glossy text-color="black"
          label="Desloguearse"
          style="width: 200px"
          type="submit"
          @click="submitForm" />
        </div>
        <div v-else>
          <q-btn color="secondary"
          glossy text-color="black"
          label="Loguearse"
          style="width: 200px"
          type="submit"
          @click="submitForm" />
        </div>

      </div>
    </div>
  </q-page>
</template>

<script>

import { mapActions } from 'vuex'
import { EDITARUSUARIO } from 'src/store/usuarios/types'

export default {
  components: {
  },
  computed: {
    irCrear: function () {
      console.log('irCrear')
      return 0
    },
    logueado: function () {
      const usuario = this.$store.getters['usuarios/getUsuario']
      return usuario.logueado
    }
  },
  methods: {
    ...mapActions('usuarios', [EDITARUSUARIO]),
    submitForm: function () {
      //console.log('editar usuario')
      this.editarUsuario()
      this.$q.notify({
        message: 'Te logueaste/Deslogueaste de la app'
      })
    }
  }
}
</script>
