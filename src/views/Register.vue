<template>
  <div>
    <form @submit.prevent="register">
      <input type="text" placeholder="Unesite ime" v-model="first_name">
      <input type="text" placeholder="Unesite prezime" v-model="last_name">
      <input type="text" placeholder="Unesite korisnicko ime" v-model="username">
      <input type="email" placeholder="Unesite email" v-model="email">
      <input type="password" placeholder="Unesite sifru" v-model="password">
      <button>Registrujte se</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'register'
}
</script>
