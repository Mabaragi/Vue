<template>
  <div id="taxRate">
    <h2>산출세액: {{ number }}만원</h2>
    <h2>세액감면: (-) 만원</h2>
  </div>
</template>

<script>
export default {
  name: 'TaxRate',
  props: {
    standardTax: Number,
  },
  data() {return {
      number: this.standardTax + 1
    }
  },
  computed: {
    resultTax: function (number) {
      return number;
    },
  },
}
</script>

<style>

</style>