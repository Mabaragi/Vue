<template>
  <div id="taxRate">
    <h2>산출세액: {{ computedTax }}만원</h2>
    <h2>세액감면: (-) {{ taxReduce }} 만원</h2>
    <hr>
    <FinalTax
    :standard-tax="standardTax"
    :tax-reduce="taxReduce"
    :computed-tax="computedTax"
    />
  </div>
</template>

<script>
import FinalTax from './FinalTax.vue'


export default {
  name: 'TaxRate',
  components: {
    FinalTax,
  },
  props: {
    standardTax: Number,
    taxReduce: Number,
  },
  data() {return {
      number: this.standardTax + 1 
  }},
  computed: {
    computedTax() {
      const tax = this.standardTax
      if (tax <= 1200) {
        return Math.round(tax * 0.06)
      } else if (tax <= 4600) {
        return Math.round(tax * 0.15) - 108
      } else if (tax <= 8800) {
        return Math.round(tax * 0.24) - 522
      } else if (tax <= 15000) {
        return Math.round(tax * 0.35) - 1490
      } else if (tax <= 30000) {
        return Math.round(tax * 0.38) - 1940
      } else if (tax <= 50000) {
        return Math.round(tax * 0.40) - 2540
      } else if (tax <= 100000) {
        return Math.round(tax * 0.42) - 3540
      } else {
        return Math.round(tax * 0.45) - 6540
      }
    }      
  },
}
</script>

<style>

</style>