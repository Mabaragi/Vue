<template>
  <div class="container">
    <div class="box">
      <h2>시작</h2>
      <div class="icon">
        <router-link :to="{ name: 'Home' }">
        <i class="fas fa-chevron-circle-left"></i>
        </router-link>
        <img src="../assets/happeed.png" alt="">
        <router-link :to="{ name: 'SsafLing' }">
        <i class="fas fa-chevron-circle-right"></i>
        </router-link>
      </div>
      <h2>해피드</h2>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.icon {
  /* display: flex; */
  /* flex-direction: column; */
  align-items: center;
  justify-content: center;
}
img {
  width: 80%;
  height: 80%;
}
.box {
  border: solid grey 1px;
  flex-flow: column;
  width: 500px;
  align-self: center;
}
.container {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>