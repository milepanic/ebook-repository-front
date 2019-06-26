<template>
  <div>
    <form @submit.prevent="login">
      <input type="email" placeholder="Unesite email" v-model="email">
      <input type="password" placeholder="Unesite sifru" v-model="password">
      <button>Ulogujte se</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  methods: {
    login() {
      this.$store.dispatch('retrieveToken', {
        email: this.email,
        password: this.password
      }).then(this.$router.push('/'))
    }
  }
}
</script>
