<template>
  <div>
    <h1>Create</h1>
    <form @submit.prevent="createArticle">
      <label for="title">제목</label>
      <input type="text" id="title" v-model="title">
      <label for="content">내용</label>
      <input type="text" id="content" v-model="content">
      <input type="submit">

    </form>
  </div>
</template>

<script>
export default {
  name:'CreateView',
  methods: {
    createArticle() {
      const title = this.title
      const content= this.content
      this.$store.dispatch('createArticle',{title:title, content:content})
      console.log(title, content);
      this.$router.push({name:'index'})
      
    }
  },
  data() {
    return {
      title: "",
      content: "",
    }
  },
}
</script>

<style>

</style>