<template>
  <div>
    <h1>Kategorija {{ category.name }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: ['category']
}
</script>
