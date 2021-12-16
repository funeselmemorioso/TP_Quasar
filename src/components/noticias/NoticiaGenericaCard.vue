<template>
    <div class="q-pa-md row items-start q-gutter-md">
        <q-card class="my-card" >
            <img :src= noticia.imagen >

            <q-card-section>
                <div class="text-h6">{{ id }}</div>
                <div class="text-h6">{{ noticia.titulo }}</div>
                <div class="text-subtitle2">Por {{noticia.autor}}</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
                {{ noticia.cuerpo }}
            </q-card-section>
        </q-card>
    </div>
</template>

<script>
export default {
  name: 'NoticiaCard',
  props: ['noticia', 'id', 'logueado']
}
</script>
