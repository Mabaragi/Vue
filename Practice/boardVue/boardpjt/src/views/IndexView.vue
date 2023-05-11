<template>
  <div>
    <h1>Index</h1>
    <h1 @click="goToCreate">글쓰기</h1>
    <ArticleItemVue
      v-for="article in articles"
      :key=article.id
      :article=article
    />
  </div>
</template>

<script>
import ArticleItemVue from '@/components/index/ArticleItem.vue'


export default {
  name: 'IndexView',
  components: {
    ArticleItemVue
  },
  computed:{
    articles(){
      return this.$store.state.articles
    }
  },
  // created(){
  //   this.$store.dispatch('fetchArticles')
  //   console.log('생성됨');
  // },
  methods: {
        goToCreate(){
      this.$router.push({name: 'CreateView'})
    }
  },
}
</script>

<style>

</style>