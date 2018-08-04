<template>
  <div >

      <router-view></router-view>
      <TemTabbar></TemTabbar>
  </div>
</template>

<script>
  import TemTabbar from '../template/tabbar/index'

  export default {
    name: 'app',
    components: {
      TemTabbar
    }
  }
</script>

<style lang="less">

</style>
