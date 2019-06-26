<template>
  <div>
    <form @submit.prevent="updateCategory">
      Ime: <input type="text" v-model.lazy="category.name">
      <button>Izmijenite</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'CategoryEdit',
  props: ['category'],
  methods: {
    updateCategory() {
      let data = {
        name: this.category.name
      };

      axios.put('http://localhost:8000/api/categories/' + this.category.id, data)
        .then(res => console.log(res.status))
        .catch(err => console.log(err));
    }
  }
}
</script>
