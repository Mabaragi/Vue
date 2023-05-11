<template>
  <div>
    <h2>점심메뉴</h2>
    <button @click="pickLunch">Pick Lunch</button>
    <br>
    {{lunchMenu}}
    <h2>로또를 뽑아보자</h2>
    <button @click="goLotto">Pick Lotto</button>
  </div>
</template>

<script>
import lodash from 'lodash';

export default {
  data () {
    return {
      lunchMenu: ''
    }
  },
  methods: {
    pickLunch() {
      const array = ['피자', '스테이크', '샐러드', '김밥', '라면', '떡볶이', '초밥', '치킨', '파스타', '갈비탕'];
      const randomLunch = lodash.sample(array)
      this.lunchMenu = randomLunch
    },
    goLotto() {
      this.$router.push({name: 'lotto'})
    }
  }
}
</script>

<style>

</style>