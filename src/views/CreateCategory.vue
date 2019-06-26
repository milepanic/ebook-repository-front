<template>
  <div>
    <form @submit.prevent="storeCategory">
      <input type="text" placeholder="Ime kategorije" v-model="name">
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'createCategory',
  data() {
    return {
      name: null
    }
  },
  methods: {
    storeCategory() {
      let data = {
        name: this.name
      };

      axios.post('http://localhost:8000/api/categories', data)
        .then(res => console.log(res.status))
        .catch(err => console.log(err));
    }
  }
}
</script>
