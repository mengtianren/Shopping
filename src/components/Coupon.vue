<template>
  <div>
    <!--这是订单页面{{this.$route.params}}-->
    <tab :scroll-threshold="5">
      <tab-item
        v-for="(list, index) in tab_list"
        :key="index"
        @on-item-click="GetTabType(list)"
        :selected="list.eng==tab_type">{{list.name}}</tab-item>
    </tab>
    <group>
      <div class="text_align_center padding_15_5_5">
        <img class="img_width" src="../assets/imgs/coupon-nocoupon.png" alt="">
        <p class="font_size_28rem">暂无优惠券</p>
      </div>
    </group>

  </div>
</template>

<script>
  import { Tab, TabItem, Group, Box, XButton } from 'vux'
  const tabList = [
    {
      name: '可使用',
      eng: 'available'
    },
    {
      name: '已使用',
      eng: 'already '
    },
    {
      name: '已过期',
      eng: 'expired'
    }
  ]
  export default {
    name: 'Coupon',
    data () {
      return {
        tab_type: 'available',
        tab_list: tabList,
        tab_content: {}
      }
    },
    components: {
      Tab,
      TabItem,
      Group,
      Box,
      XButton
    },
    methods: {
      GetTabType (list) {
        this.tab_content = list
      }
    },
    created () {}
  }
</script>

<style scoped>
  .img_width{
    width: 90px;
  }
</style>
