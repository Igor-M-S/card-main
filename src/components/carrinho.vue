<template>
    <div>
        <q-card class="my-card bg-grey-1" >
            <q-item >
                <div>
                    <q-img
                        style="width: 40px"
                        :ratio="1"
                        class="rounded-borders"
                        src="https://media.istockphoto.com/vectors/shopping-trolley-cart-icon-in-green-circle-vector-vector-id898475764?k=20&m=898475764&s=170667a&w=0&h=OZC-uH2NQd_vBDqoj1AHWb8NFLD9amYojQJO1RvjWI0="
                    />
                </div>
                
                <q-item-section>
                    <div class="text-h5" style="text-align:center">
                        Carrinho de compras
                    </div>
                </q-item-section>
                
            </q-item>
            
            <q-separator />

            <div q-pa-md v-for="(item, del) in items" :key="item.message">

            <q-card-section  horizontal>
                
                <div >
                    <img
                        style="max-height:100px"
                        :ratio="1"
                        :src="item.url"
                    />
                </div>

                <q-separator vertical/> 
             <q-card-section horizontal style="width:50%;">
                 <p class="descricao">{{ item.message }}</p>
             </q-card-section>

                <q-separator vertical/>
                
                <q-card-section horizontal>
                    <div>
                        <p class="preco">R${{ item.preco }},00</p>
                        <q-btn color="primary" label="Remover"  v-on:click="remover(del)" ></q-btn>
                    </div>
            
                </q-card-section>
                
            </q-card-section>

        <q-separator />
        
            </div>
            
        </q-card>
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