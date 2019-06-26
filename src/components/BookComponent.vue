<template>
  <div>
    <strong>{{ book.title }}</strong>
    <p>Autor: {{ book.author }}</p>
    <p>Izdata: {{ book.publication_year }}</p>
  </div>
</template>

<script>
export default {
  name: 'Book',
  props: ['book'],
  components: {
    
  }
}
</script>
