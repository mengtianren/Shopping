<template>
  <div>
    <TemSearch :top="44" ></TemSearch>
    <router-view></router-view>
  </div>

</template>

<script>
  import TemSearch from '../template/search/index'
  export default {
    name: 'Super',
    components: {TemSearch}
  }
</script>

<style scoped>

</style>
