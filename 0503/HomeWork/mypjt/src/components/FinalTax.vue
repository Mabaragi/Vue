<template>
  <div>
    <h2>결정세액: {{finalTax}} 만원</h2>
  </div>
</template>

<script>
export default {
  name: 'FinalTax',
  props: {
    standardTax: Number,
    taxReduce: Number,
    computedTax: Number,
  },
  computed: {
    finalTax() {
      return this.computedTax - this.taxReduce >=0 ? this.computedTax - this.taxReduce : 0
    }
  }
}
</script>

<style>

</style>