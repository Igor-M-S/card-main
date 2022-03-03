  import { ref } from 'vue'

export default {
  setup () {
    return {
      model: ref(null),
      options: [
        '1', '2', '3', '4', '5'
      ]
    }
  }
}