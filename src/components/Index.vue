<template>
  <div >

      <router-view></router-view>
      <TemTabbar v-if="title != '购物车'" ></TemTabbar>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import TemTabbar from '../template/tabbar/index'

  export default {
    name: 'app',
    components: {
      TemTabbar
    },
    computed: {
      ...mapState({
        title: state => state.app.title
      })
    }
  }
</script>

<style lang="less">

</style>
