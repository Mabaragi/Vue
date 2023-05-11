<template>
  <div id="app">
    <h1>SSAFY TUBE</h1>
    
  </div>
</template>

<script>
import axios from 'axios';
const API_KEY = process.env.VUE_APP_YOUTUBE_API_KEY

export default {
  name: 'App',
  components: {
  },
  methods: {
    getYoutube() {
    axios({
      method: 'get',
      url: 'https://www.googleapis.com/youtube/v3/search',
      params: {
        part: 'snippet',
        type: 'video',
        q: 'ssafy',
        key: API_KEY,
      },
    })
    .then((res) => {
      console.log(res.data);
    })
    .catch((err) =>{
      console.log(API_KEY);
      console.log(err);
    })
    }
  },
  created(){
    this.getYoutube()
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
