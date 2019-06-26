<template>
  <div>
    <form @submit.prevent="storeBook">
      <input type="file" ref="file">
      <input type="text" placeholder="Naslov" v-model="title">
      <input type="text" placeholder="Autor" v-model="author">
      <input type="number" placeholder="Datum izdavanja" v-model="publication_year">
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
      var formData = new FormData();
      formData.append('file', this.$refs.file.files[0]);
      formData.set('title', this.title);
      formData.set('author', this.author);
      formData.set('publication_year', this.publication_year);
      formData.set('category_id', this.category.id);
      formData.set('keywords', this.keywords);

      axios({
        method: 'POST',
        url: 'http://localhost:8000/api/books',
        data: formData,
        config: { headers: {'Content-Type': 'multipart/form-data' }}
      })
      .then(function (response) {
          console.log(response);
      })
      .catch(function (response) {
          console.log(response);
      });
    }
  }
}
</script>
