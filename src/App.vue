<template>
  <div id="app">
    <ViewBox>
    <TemHeader v-if="title !='首页'" @MoreShow="MoreShow" ></TemHeader>
    <TemSearch v-if="title=='首页'" ></TemSearch>
      <!--<div v-transfer-dom>-->
        <flexbox class="bg_white height_44" v-show="flex_show" >
          <flexbox-item><div class="flex-demo" @click="GoLink('/')" >首页</div></flexbox-item>
          <flexbox-item><div class="flex-demo" @click="GoLink('/shop')" >购物车</div></flexbox-item>
          <flexbox-item><div class="flex-demo" @click="GoLink('/order/whole')" >我的订单</div></flexbox-item>
        </flexbox>
      <!--</div>-->
    <router-view></router-view>
    </ViewBox>
  </div>
</template>

<script>
  import {ViewBox, Flexbox, FlexboxItem} from 'vux'
  import { mapState } from 'vuex'
  import TemHeader from './template/header/index'
  import TemSearch from './template/search/index'
  export default {
    name: 'app',
    data () {
      return {
        flex_show: false
      }
    },
    components: {
      ViewBox,
      Flexbox,
      FlexboxItem,
      TemHeader,
      TemSearch
    },
    // directives: {
    //   TransferDom
    // },
    computed: {
      ...mapState({
        title: state => state.app.title
      })
    },
    methods: {
      MoreShow () {
        this.flex_show = !this.flex_show
      },
      GoLink (link) {
        this.$router.push(link)
        this.flex_show = false
      }
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
<style scoped lang="less">
  .height_44{
    height: 44px;
    border-bottom: 1px solid #efefef;
    .flex-demo{
      text-align: center;
    }
  }
</style>
