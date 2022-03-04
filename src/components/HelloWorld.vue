<template>
<div class="body">
  <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="card-master" style="width: 1000px">
      <q-item >
        <div class="row no-wrap items-center" >
              <q-img
                style="width: 40px"
                :ratio="0"
                class="rounded-borders"
                src="https://media.istockphoto.com/vectors/shopping-trolley-cart-icon-in-green-circle-vector-vector-id898475764?k=20&m=898475764&s=170667a&w=0&h=OZC-uH2NQd_vBDqoj1AHWb8NFLD9amYojQJO1RvjWI0="
              />
              </div>
        <q-item-section>
          <div class="text-h5 q-mt-sm q-mb-xs" style="text-align:center">
             Carrinho de compras
             </div>
        </q-item-section>
      </q-item>

      <q-separator />
      <q-btn >
        <q-card-section horizontal class="card-main"> 
          <img class="imgg"
            src="https://imgs.casasbahia.com.br/55014134/1xg.jpg?imwidth=130"
          />
            <q-separator vertical />

              <q-card-section class="card-mid">
                <p class="descricao">Fone de Ouvido Bluetooth Xiaomi Mi True Wireless Earbuds Basic 2 XM542PRE - Preto</p>
              </q-card-section>

            <q-separator vertical />

              <q-card-section horizontal class="ultimo-card">
                <p class="preço">R$40,00</p>
                <div class="boton1">
                <q-btn color="primary"  label="remover" />
                </div>
                <div class="boton2">
                <q-btn style="width: 150px;" color="primary"  label="mover para lista de desejo" />
                </div>
              </q-card-section>
              
        </q-card-section>
      </q-btn>
    </q-card>

  
  <div class="card2">

    <q-card class="my-car" style="width: 300px">
      <q-card-section>
        <div class="text-h5" style="text-align:center">Preço total</div>
      </q-card-section>

      <q-separator />

      <q-card-actions vertical>
        <q-btn flat>
          <p class="preço2">R$40,00</p>
        </q-btn>
        
      </q-card-actions>
      
    </q-card>
    <div>
        <q-btn color="primary" class="boton4" style="width: 300px; height: 62px">
          <p class="b4">FINALIZAR</p>
          </q-btn>
      </div>

    
  </div>
    
  </div>
  </div>
</template>

<script>
import { ref } from 'vue'


export default {
  
  components: {
    
},

  setup () {
    return {
      val: ref(true)
    }
  },

}
</script>

<style>
@import '../styles/card.css';

</style>

