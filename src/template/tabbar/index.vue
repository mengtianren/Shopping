<template>
  <div class="footer">
    <tabbar>
      <tabbar-item selected link="/" >
        <img slot="icon" src="../../assets/imgs/icon_nav_button.png">
        <span slot="label">首页</span>
      </tabbar-item>
      <tabbar-item show-dot selected link="/super/market/clothes">
        <img slot="icon" src="../../assets/imgs/icon_nav_msg.png">
        <span slot="label">分类</span>
      </tabbar-item>
      <tabbar-item selected link="/component/demo">
        <img slot="icon" src="../../assets/imgs/icon_nav_article.png">
        <span slot="label">购物车</span>
      </tabbar-item>
      <tabbar-item badge="2" selected link="/user" >
        <img slot="icon" src="../../assets/imgs/icon_nav_cell.png">
        <span slot="label">我</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
  import { Tabbar, TabbarItem } from 'vux'
  export default {
    name: 'TemTabbar',
    components: {
      Tabbar,
      TabbarItem
    }
  }
</script>
<style scoped >
  .footer{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
</style>
