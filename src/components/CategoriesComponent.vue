<template>
  <div>
    <div v-for="category in categories" :key="category.id">
      <router-link :to="{ name: 'category', params: { id: category.id } }">{{ category.name }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Categories',
  props: ['categories'],
}
</script>
