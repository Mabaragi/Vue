<template>
  <div>
    <h1 @click="goToDetail()">{{article.title}}</h1>
  </div>
</template>

<script>
export default {
  name: 'ArticleItem',
  props: {
    article: Object
  },
    methods: {
      goToDetail(){
        const articleId = this.article.id
        console.log(articleId);
        this.$router.push({name: 'DetailView', params:{id:articleId} })
      }
    },
}
</script>

<style>

</style>