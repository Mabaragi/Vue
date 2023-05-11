<template>
  <div class="container">
    <div class="box">
      <h2>1단계</h2>
      <div class="icon">
        <i @click="alertMessage" class="fas fa-chevron-circle-left"></i>
        <img src="../assets/happling.png" alt="">
        <router-link :to="{ name: 'SsafLeaf' }">
        <i class="fas fa-chevron-circle-right"></i>
        </router-link>
      </div>
      <h2>싸플링</h2>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    alertMessage() {
      alert('이전 진화단계로 돌아갈 수 없습니다.')
    }
  }
}
</script>

<style>

</style>