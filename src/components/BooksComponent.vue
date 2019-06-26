<template>
  <div>
    <div v-for="book in books" :key="book.id">
      <router-link :to="{ name: 'book', params: { id: book.id } }">{{ book.title }}</router-link>
      <p>{{ book.author }}</p>
      <small>{{ book.publication_year }}</small>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Books',
  props: ['books']
}
</script>
