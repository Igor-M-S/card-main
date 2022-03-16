<template>
    <q-item>
  <div id="nav">
      <router-link to="/About">loja </router-link> |
      <router-link to="/">carrinho</router-link> 
  </div>
  </q-item>
  <router-view />
</template>
<script>
import { itensStores } from "../stores/itens"

  export default {
    setup() {
      const store = itensStores()
      return {
        totalCarrinho: store.itemsCarrinho.length
      }
    }
  }
</script>
