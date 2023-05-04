import Vue from 'vue'
import Vuex from 'vuex'
const axios = require('axios')

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // axios response로 들어오는 cat을 넣어줌. 리스트 형태로 들어오므로 호환성을 위해서 리스트로 선언
    cats: [],
  },
  getters: {
  },
  mutations: {
    // mutations는 state를 인자로 받음. 두번째에서는 전달된 데이터
    CHANGE_CATS(state, catsUrlList) {
      state.cats = catsUrlList
    },
  },
  actions: {
    //actions는 context를 인자로 받음. context는 store의 몇가지 기능들
    fetchCats(context, catNumber){
      const url = `https://api.thecatapi.com/v1/images/search?limit=${catNumber}`
      console.log(url);
      axios({
        headers:{
          'x-api-key':'live_x1Erbb5vmFj1olNsiShdIZPrycB8Xy5Z6qs8lObSK9Zt2AREijFeOnjeIosrm2Yq'
        },
        url: url,
        method: 'get',
      })
      .then((res) => {
        // context는 this.$store와 비슷한 역할
        console.log(context);
        console.log(res.data);
        const catsUrlList = res.data.map(el => {return{url: el.url, id: el.id}})
        console.log(catsUrlList);
        context.commit('CHANGE_CATS', catsUrlList)
      })
    },
  },
  modules: {
  }
})
