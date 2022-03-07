<template>
  <q-layout class="body">
    <q-header>
      <q-toolbar>
        <q-toolbar-title>
          Carrinho de compras
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <Page />
    </q-page-container>
  </q-layout>
</template>
<style scoped>


</style>


<script>
import Page from './views/page.vue'
//import total from './components/total-price-price.vue'



export default {
  name: 'LayoutDefault',

  components: {
    Page,
}
}
</script>
