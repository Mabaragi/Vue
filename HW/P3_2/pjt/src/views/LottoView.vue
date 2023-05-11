<template>
  <div>
    <h1>로또</h1>
    <button @click="getLuckyNumbers">Get Lucky Numbers</button>
    <p v-if="luckyNumbers.length">{{luckyNumbers}}</p>
  </div>
</template>

<script>
import lodash from 'lodash';
export default {
  data () {
    return {
      luckyNumbers: []
    }
  },
  methods: {
    getLuckyNumbers() {
      const numbers = Array.from({ length: 45 }, (_, index) => index + 1)
      const luckyNumbers = lodash.sampleSize(numbers, 6)
      this.luckyNumbers = luckyNumbers
    }
  }
}
</script>

<style>

</style>