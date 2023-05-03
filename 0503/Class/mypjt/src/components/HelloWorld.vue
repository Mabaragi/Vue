<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h1>{{ message }}</h1>
    <button @click="change">메시지 로그</button>
    <button @click="emitEvent">에밋 이벤트</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String,
    message: String,
  },
  methods:{
    change(){
      console.log(this);
      console.log(this.msg);
    },
    emitEvent() {
      // console.log(this.message);
      this.$emit('event-name', {data:123})
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
