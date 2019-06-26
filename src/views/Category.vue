<template>
  <div>
    <Category v-show="!editForm" v-bind:category="category"/>
    <CategoryEdit v-show="editForm" v-bind:category="category"/>
    <router-link :to="{ name: 'createBook', params: {category: category} }">
      <button>Nova knjiga</button>
    </router-link>
    <button v-on:click="editCategory">Edit</button>
    <button v-on:click="deleteCategory">Delete</button>
    <Books v-bind:books="category.books"/>
  </div>
</template>

<script>
import Category from '@/components/CategoryComponent'
import CategoryEdit from '@/components/CategoryEditComponent'
import Books from '@/components/BooksComponent'
import axios from 'axios'

export default {
  name: 'category',
  components: {
    Category, CategoryEdit, Books
  },
  data() {
    return {
      category: [],
      editForm: false,
    }
  },
  created() {
    axios.get('http://localhost:8000/api/categories/' + this.$route.params.id)
      .then(res => this.category = res.data.data)
      .catch(err => console.log(err));
  },
  methods: {
    editCategory() {
      this.editForm = !this.editForm;
    },
    deleteCategory() {
      axios.delete('http://localhost:8000/api/categories/' + this.category.id)
        .then(this.$router.push('/') )
        .catch(err => console.log(err));
    }
  }
}
</script>

<style>
  
</style>
