<template>
  
    <q-card class="my-card bg-grey-1" style="max-width: 300px">
                <q-item-section>
                    <div class="text-h5" style="text-align:center">
                        Preço total
                    </div>
                </q-item-section>

      <q-separator />
      <q-card-section>
          <p class="preço2">{{ total }}</p>
      </q-card-section>
      <q-separator />
      
    <q-card-section>
      <q-btn color="primary" class="boton4" label="FINALIZAR" style="width: 100%;height: 100%">
          </q-btn>
      </q-card-section>
     </q-card> 

</template>

<script>
import { itensStores } from '../stores/itens'

export default{
    setup() {
    const store = itensStores()
    return {
    items: store.items
    }

},
    computed: {
    total: function() {
        
        return this.items.reduce((total, p) => total + p.preco, 0);

    }
    }
}
</script>

<style>


</style>

