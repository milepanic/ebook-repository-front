<template>
  <div>
    <Book v-show="!editForm" v-bind:book="book"/>
    <BookEdit v-show="editForm" v-bind:book="book" />
    <button v-on:click="downloadBook">Download</button>
    <button v-on:click="editBook">Edit</button>
    <button v-on:click="deleteBook">Delete</button>
  </div>
</template>

<script>
import Book from '@/components/BookComponent.vue'
import BookEdit from '@/components/BookEditComponent.vue'
import axios from 'axios'

export default {
  name: 'book',
  components: {
    Book, BookEdit
  },
  data() {
    return {
      book: [],
      editForm: false,
    }
  },
  created() {
    axios.get('http://localhost:8000/api/books/' + this.$route.params.id)
      .then(res => this.book = res.data.data)
      .catch(err => console.log(err));
  },
  methods: {
    downloadBook() {
      axios({
        url: 'http://localhost:8000/api/books/' + this.book.id + '/download',
        method: 'GET',
        responseType: 'arraybuffer',
      }).then( ({ data }) => {
          let blob = new Blob([data], { type: 'application/pdf' })
          let link = document.createElement('a')

          link.href = window.URL.createObjectURL(blob)
          link.download = this.book.filename
          link.click()
        }).catch(error => {
          console.error(error)
        });
    },
    editBook() {
      this.editForm = !this.editForm;
    },
    deleteBook() {
      axios.delete('http://localhost:8000/api/books/' + this.book.id)
        .then(this.$router.push('/') )
        .catch(err => console.log(err));
    }
  }
}
</script>
