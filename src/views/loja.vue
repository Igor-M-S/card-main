<template>
  <div>
    <div q-pa-md v-for="(item, del) in items" :key="item.message ">
      <q-card class="my-card bg-grey-1" style="max-width: 300px">
        <q-card-section vertical>
          <div >
            <img
              style="height:200px"
              :ratio="1"
              :src="item.url"
            />
          </div>

          <q-separator horizontal/> 

          <q-card-section>
            <p class="descricao">{{ item.message }}</p>
          </q-card-section>

            <q-separator vertical/>
                  
          <q-card-section horizontal>
            <div>
              <p class="preco">R${{ item.preco }},00</p>
              <q-btn color="primary" label="Add no Carrinho"  v-on:click="remover(del)" ></q-btn>
            </div>
              
          </q-card-section>
                  
        </q-card-section>

        <q-separator />
        
          </q-card>
            </div>
            
        
    </div>
</template>
<script>


export default{
components: {
   
},
data() {
  return {
    items:  [{  message: 'fone de ouvido sangsung preto',
                url:'https://imgs.casasbahia.com.br/55014134/1xg.jpg?imwidth=130',
                preco:'40' },

            {   message: 'fone de ouvido sangsung branco', 
                url:'https://imgs.casasbahia.com.br/55019501/1xg.jpg?imwidth=292', 
                preco:'40' }
            ]
}
},
methods: {
    remover: function (del) {
      this.items.splice(del,1);
    }
  }
}


</script>


<style>
@import '../styles/background.css';
</style>
