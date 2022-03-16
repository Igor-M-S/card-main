<template>
  <q-layout class="body">
    <q-header>
      <q-toolbar>
        <q-toolbar-title>
          Carrinho de compras
        </q-toolbar-title>
        <button>
        <div>
          <img src="@/assets/57451.png" 
                alt="Carrinho" 
                :ratio="1"
                style="max-width:40px"
          />
          <span>{{ totalCarrinho }}</span>
        </div>
        </button>
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
import { itensStores } from "./stores/itens"

export default {
  name: 'LayoutDefault',

  components: {
    Navbar,
},
setup() {
      const store = itensStores()
      return {
        totalCarrinho: store.itemsCarrinho.length
      }
    }
  }

</script>
