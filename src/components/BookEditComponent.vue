<template>
  <div>
    <form @submit.prevent="updateBook">
      PDF: <input type="file" ref="file">
      Naslov: <input type="text" v-model.lazy="book.title">
      Autor: <input type="text" v-model.lazy="book.author">
      Izdata: <input type="text" v-model.lazy="book.publication_year">
      <button>Izmijenite</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'BookEdit',
  props: ['book'],
  methods: {
    updateBook() {
      var formData = new FormData();
      formData.append('file', this.$refs.file.files[0]);
      formData.set('title', this.book.title);
      formData.set('author', this.book.author);
      formData.set('publication_year', this.book.publication_year);

      axios({
        method: 'POST',
        url: 'http://localhost:8000/api/books/update/' + this.book.id,
        data: formData,
        config: { headers: {'Content-Type': 'multipart/form-data' }}
      })
      .then(function (response) {
          //handle success
          console.log(response);
      })
      .catch(function (response) {
          //handle error
          console.log(response);
      });
      // axios.put('http://localhost:8000/api/books/' + this.book.id, 
      //   formData,
      //   {
      //     headers: {
      //       'Content-Type': 'multipart/form-data'
      //     }
      //   }).then(res => console.log(res.status))
      //   .catch(err => console.log(err));
    }
  }
}
</script>
