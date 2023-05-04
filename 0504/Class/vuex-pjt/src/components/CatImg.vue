<template>
  <div>
    <img
      v-for="(catUrl) in cats"
      :key="catUrl.id"
      :src="catUrl.url"
    >
  </div>
</template>

<script>
export default {
  name: 'CatImg',
  computed: {
    cats() {
      return this.$store.state.cats
    }
  }
}
</script>

<style>

</style>