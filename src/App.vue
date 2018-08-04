<template>
  <div id="app">
    <ViewBox>
    <TemHeader v-if="title !='首页'" ></TemHeader>
    <TemSearch v-if="title=='首页'" ></TemSearch>
    <router-view></router-view>
    </ViewBox>
  </div>
</template>

<script>
  import { ViewBox } from 'vux'
  import { mapState } from 'vuex'
  import TemHeader from './template/header/index'
  import TemSearch from './template/search/index'
  export default {
    name: 'app',
    components: {
      ViewBox,
      TemHeader,
      TemSearch
    },
    computed: {
      ...mapState({
        title: state => state.app.title
      })
    }
  }
</script>

<style lang="less">
@import '~vux/src/styles/reset.less';

body {
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  font-size: 14px;
  background-color: #F4F4F4;
}
  #app{
    height: 100%;
  }
</style>
