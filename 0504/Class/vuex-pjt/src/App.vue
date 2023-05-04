<template>
  <div id="app">
    app.vue
    <!-- <img
     v-for="(catUrl, index) in cats"
     :key="index"
     :src="catUrl"
     > -->
    고양이 몇마리?<input type="number" v-model="catNumber">
    <button @click="fetchCats">야옹야옹</button>
    <CatImg/>
  </div>
</template>

<script>
import CatImg from './components/CatImg.vue'

export default {
  name: 'App',
  data() {
    return{
      catNumber: 0,
    }
  },
  components: {
    CatImg,
  },
  methods: {
    fetchCats() {
      // state의 cats를 axios 요청을 통해 변경
      this.$store.dispatch('fetchCats', this.catNumber)
    },
  },
  computed: {
    // store 에서 사용하는 데이터는 computed에서 가져옴
    cats() {
      return this.$store.state.cats
    },
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
