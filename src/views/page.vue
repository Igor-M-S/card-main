<template>
    <div class="q-ma-md row items-start q-gutter-md">
      <carrinho />
      <price />
    </div>
</template>
<script>
import carrinho from '../components/carrinho.vue';
import price from '../components/teste/price.vue'


export default {

  components: {
    carrinho,
    price
  }
}
</script>
