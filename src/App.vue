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
      <Navbar />
    </q-page-container>
  </q-layout>
</template>
<style scoped>
</style>
<script>
import Navbar from './components/Navbar.vue'



export default {
  name: 'LayoutDefault',

  components: {
    Navbar,
}
}
</script>
