import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    article_id: 3,
    articles: [
    ]
  },
  getters: {
  },
  mutations: {
    SAVE_ARTICLES (state, articles) {
      state.articles = articles
    },
    CREATE_ARTICLE (state, article) {
      console.log(article);
      state.articles.push(article)
      state.article_id += 1
    },
  },
  actions: {
    fetchArticles(context){
      const articles = [
        {
          id : 1,
          title : '제목',
          content : '내용',
          
        },
        {
          id : 2,
          title : '제목2',
          content : '내용2',
        },
      ]
      context.commit('SAVE_ARTICLES', articles)
    },
    createArticle(context, payLoad){
      const article = {
        id: this.state.article_id,
        title: payLoad.title,
        content: payLoad.content,
      }
      context.commit('CREATE_ARTICLE', article)
    },
  },
  modules: {
  }
})
