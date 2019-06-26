<template>
  <div>
    <form @submit.prevent="search">
      <input type="text" placeholder="Pretrazite knjige" v-model="title">
      <button>Pretrazite</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'search',
  data() {
    return {
      title: ''
    }
  },
  methods: {
    search() {
      axios.get('http://localhost:8000/api/search', {
        params: {
          title: this.title
        }
      }).then(res => {
          console.log(res.data)
        }).catch(err => console.log(err))
    }
  }
}
</script>
