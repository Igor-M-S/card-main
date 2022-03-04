<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="glossy">
      <q-toolbar>
        <q-toolbar-title>
          Quasar App
        </q-toolbar-title>


      </q-toolbar>
    </q-header>

    
    <q-page-container >
      <div class="back">
      <HelloWorld />
      </div>
    </q-page-container>
    
  </q-layout>
</template>
<style scoped>


</style>


<script>
import { ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'


export default {
  name: 'LayoutDefault',

  components: {
    HelloWorld,
},

  setup () {
    return {
      leftDrawerOpen: ref(false)
    }
  }
}
</script>
