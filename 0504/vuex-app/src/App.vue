<template>
  <div id="app">
    <h1>길이: {{ messageLength }} 내용: {{ message }}</h1>
    <!-- state 데이터 변경하기  -->
    <input type="text" @keyup.enter="changeMessage" v-model="inputData">

    <!-- <h1>{{ $store.state.message }}</h1> -->
  </div>
</template>

<script>

export default {
  name: 'App',
  data() {
    return {
      inputData: null,
    }
  },
  methods: {
    changeMessage() {
      const newMessage = this.inputData
      // 'changeMessage'가 액션
      this.$store.dispatch('changeMessage', newMessage)
      this.inputData = null
    },
  },
  components: {
  },
  computed: {
    message() {
      return this.$store.state.message
    },
    messageLength() {
      return this.$store.getters.messageLength
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
