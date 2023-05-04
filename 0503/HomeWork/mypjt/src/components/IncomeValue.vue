<template>
  <div id="income">
  연봉 입력 (만원): 
  <input 
  v-model.number="income"
  type="number"
  >    
  <br>
  세액감면액 (만원): 
  <input 
  v-model.number="discount"
  type="number"
  >
  <hr>
  <h2>종합소득금액: {{income}} 만원</h2>
  <h2>종합소득공제: (-) {{discount}} 만원</h2>
  <h2>과세표준: {{standardTax(income, discount )}} 만원</h2>
  <hr>
  <TaxRate
  :standard-tax="standardTax(income, discount)"
  :tax-reduce="taxReduce"
  />
  </div>
  
</template>

<script>
/* eslint-disable */
import TaxRate from './TaxRate.vue'
export default {
  name: 'IncomeValue',
  components: {
    TaxRate,
  },
  data() {return {
    discount: 150,
    taxReduce: 50,
    income: 0,
    standardTax: function(income, discount) {
      if (income - discount >= 0) {
        return income - discount
      } else {
        return 0
      }
    }
  }},
}

</script>

<style>

input {
  margin: 5px;
}

</style>
