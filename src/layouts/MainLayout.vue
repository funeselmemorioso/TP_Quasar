<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title>
          Eze News
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-footer elevated style="height:20px;">
      <p>{{textoFooter}}</p>
    </q-footer>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      class="bg-grey-3"
    >
      <q-list>
        <q-item-label
          header
        >
          Principales Áreas
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'Portada',
    caption: 'Las Mejores Noticias de la Argentina',
    icon: 'home',
    link: '#/',
    separator: true
  },
  {
    title: 'Economía',
    caption: 'Principales Noticias de Economía',
    icon: 'label',
    link: '#/economia',
    separator: false
  },
  {
    title: 'Cultura',
    caption: 'Suplemento de Cultura',
    icon: 'label',
    link: '#/cultura',
    separator: false
  },
  {
    title: 'Loguearse/Desloguearse',
    caption: 'Para el ABM hay que estar logueado',
    icon: 'settings',
    link: '#/login',
    separator: true
  }
]

import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  computed: {
    textoFooter: function () {
      const usuario = this.$store.getters['usuarios/getUsuario']
      return usuario.logueado ? 'Hola ' + usuario.nombre : 'Logueate a la app'
    }
  },
  setup () {
    const leftDrawerOpen = ref(false)
    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
