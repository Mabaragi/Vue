<template>
  <div class="container">
    <div class="box">
      <h2>3단계</h2>
      <div class="icon">
        <i @click="alertMessage" class="fas fa-chevron-circle-left"></i>
        <img src="../assets/happlower.png" alt="">
        <i @click="alertHome" class="fas fa-chevron-circle-right"></i>
      </div>
      <h2>싸플라워</h2>
    </div>
  </div>
</template>

<script>
import router from '@/router'
export default {
  methods: {
    alertMessage() {
      alert('이전 진화단계로 돌아갈 수 없습니다.')
    },
    alertHome() {
      alert('Home으로 돌아갑니다.')
      router.push({name:'Home'})
    }
  }
}
</script>

<style>

</style>