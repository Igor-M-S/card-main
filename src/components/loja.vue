<template>
  <div>
    <div q-pa-md  class="q-pa-md row items-start q-gutter-md">
        
        <q-card 
            flat bordered class="my-card" 
            v-for="(item) in items" 
            :key="item.message" 
            style="max-width: 250px"
        >

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
                    <q-btn color="primary" label="Add no Carrinho"></q-btn>
                    </div>
                    
                </q-card-section>
                        
            </q-card-section>

        <q-separator />
      
    </q-card>
    

</div>
        
    </div>
</template>
<script>
import { itensStores } from '../stores/itens'

export default{
components: {
   
},

setup() {
    const store = itensStores()
    return {
    items: store.itemsEstoque
    }

},
}


</script>


<style>
@import '../styles/background.css';
</style>
