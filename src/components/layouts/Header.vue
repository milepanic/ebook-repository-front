<template>
  <header class="header">
    <h1>
      <router-link to="/">eBook Repository</router-link>
    </h1>
    <ul>
      <li><router-link to="/search">Search</router-link></li>
      <li v-if="!loggedIn"><router-link to="/login">Login</router-link></li>
      <li v-if="!loggedIn"><router-link to="/register">Register</router-link></li>
      <li v-if="loggedIn"><router-link to="/logout">Logout</router-link></li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'Header',
  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn
    }
  }
}
</script>

<style scoped>
  .header {
    background: #333;
    color: #fff;
    text-align: center;
    padding: 10px;
  }
  .header a {
    color: #fff;
    padding-right: 5px;
    text-decoration: none;
  }
</style>
