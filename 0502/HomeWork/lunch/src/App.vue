<template>
  <div id="app">
    <h1>버튼 박스 제작</h1>
    <div class="border">
      <h2>예약 페이지</h2>
      <h3>시간 선택</h3>
      <div class="table">
        <div v-for="row in 4" :key="row" class="row">
          <span v-for="col in 6" :key="col">{{ times[(row - 1) * 8 + (col - 1)] }}</span>
        </div>
    </div>
    </div>      
  </div>
</template>

<script>
export default {
  data() {
    return {
      times: [
  "09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30",
  "14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30",
  "19:00","19:30","20:00","20:30","21:00","21:30","22:00","22:30","23:00","23:30",
      ],
    }
  },
  name: 'App',
}

// times: [
//   "09:00","09:30","10:00","10:30","11:00","11:30","12:00","12:30","13:00","13:30",
//   "14:00","14:30","15:00","15:30","16:00","16:30","17:00","17:30","18:00","18:30",
//   "19:00","19:30","20:00","20:30","21:00","21:30","22:00","22:30","23:00","23:30",
// ]


</script>



<style>
#app {
  text-align: center;
}
.border {
  border: solid 0.01px whitesmoke;
}
.table {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.row {
  display: flex;
  justify-content: space-between;
}
span {
  flex: 1;
  text-align: center;
  padding: 8px;
  border: 1px solid;
  box-sizing: border-box;
  margin: 2px;
}
</style>