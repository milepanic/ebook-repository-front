<template>
  <div>
    <h1>Sve Kategorije</h1>
    <router-link :to="{ name: 'createCategory' }"><button>Dodajte kategoriju</button></router-link>
    <Categories
      v-bind:categories="categories"
    />
  </div>
</template>

<script>
import Categories from '@/components/CategoriesComponent.vue'
import axios from 'axios'

export default {
  name: 'categories',
  components: {
    Categories
  },
  data() {
    return {
      categories: []
    }
  },
  created() {
    axios.get('http://localhost:8000/api/categories')
      .then(res => (this.categories = res.data.data))
      .catch(err => console.log(err));
  }
}
</script>
