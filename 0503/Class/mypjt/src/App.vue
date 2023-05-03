<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"
      message="someValue"
      @event-name='alertValue'
    />
    <button @click="alertValue">클릭</button>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data () {
    return {
      someValue: 'haha'
    }
  },
  methods: {
    alertValue (obj){
      // alert('에밋 이벤트')
      console.log(obj);
      alert(obj.data)
    },
  },
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
