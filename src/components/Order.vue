<template>
  <div>
    <TemLoading></TemLoading>
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
       <img class="img_width" src="../assets/imgs/order_blank.png" alt="">
       <p class="font_size_28rem">{{tab_content.name}}里面暂无订单</p>
       <box gap="10px 10px">
         <x-button mini type="primary" link="/super/market" >去逛逛</x-button>
       </box>
     </div>
    </group>

  </div>
</template>

<script>
  import { Tab, TabItem } from 'vux'
  const tabList = [
    {
      name: '全部',
      eng: 'whole'
    },
    {
      name: '待付款',
      eng: 'payment'
    },
    {
      name: '待收货',
      eng: 'received'
    },
    {
      name: '待评价',
      eng: 'evaluated'
    },
    {
      name: '已完成',
      eng: 'completed'
    }
  ]
  export default {
    name: 'Order',
    data () {
      return {
        tab_type: 'whole',
        tab_list: tabList,
        tab_content: {}
      }
    },
    components: {
      Tab,
      TabItem
    },
    methods: {
      GetTabType (list) {
        this.tab_content = list
      }
    },
    created () {
      console.log(this.$route.params)
      this.tab_type = this.$route.params.type
      this.tab_content = this.tab_list.find(list => list.eng === this.tab_type)
      // console.log()
    }
  }
</script>

<style scoped>
  .img_width{
    width: 90px;
  }
</style>
