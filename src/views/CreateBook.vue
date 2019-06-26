<template>
  <div>
    <form @submit.prevent="storeBook">
      <input type="text" placeholder="Naslov" v-model="title">
      <input type="text" placeholder="Autor" v-model="author">
      <input type="text" placeholder="Datum izdavanja" v-model="publication_year">
      <input type="text" placeholder="Keywords" v-model="keywords">
      <button>Submit</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'createBook',
  props: ['category'],
  data() {
    return {
      title: null,
      author: null,
      publication_year: null,
      keywords: null,
    }
  },
  methods: {
    storeBook() {
      let data = {
        title: this.title,
        author: this.author,
        publication_year: this.publication_year,
        category_id: this.category.id,
        keywords: this.keywords
      };

      axios.post('http://localhost:8000/api/books', data)
        .then(res => console.log(res.status))
        .catch(err => console.log(err));
    }
  }
}
</script>
