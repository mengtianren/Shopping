<template>
    <div>
      <!--{{this.$route.params}}-->
      <TemLoading></TemLoading>
      <TemSwiper :img_list="img_list" ></TemSwiper>
      <card >
        <p slot="content" class="card_padding">
          <x-icon class="float_right" type="ios-heart-outline" size="30"></x-icon>
          <span class="font_size_30rem">
            爱普生（Epson）LQ630K 黑色色带（适用LQ-610k/615k/630K/635k/730K/735k/80KF）C13S015583
          </span>
        </p>
        <p slot="footer" class="text_color_orange padding_0_10_5">￥{{20.00}}</p>
      </card>

      <group >
        <cell title="型号">
          <checker v-model="type" default-item-class="click_item font_size_28rem" selected-item-class="click_item_selected text_color_orange">
            <checker-item :value="item" v-for="(item, index) in items" :key="index">{{item.value}}</checker-item>
          </checker>
        </cell>
        <cell title="数量">
          <inline-x-number style="display:block;" :min="0" width="50px" button-style="round"></inline-x-number>
        </cell>
        <x-address
          @on-hide="logHide"
          @on-show="logShow"
          title="地址"
          v-model="address"
          :list="addressData"
          @on-shadow-change="onShadowChange"
          placeholder="请选择地址"
          :show.sync="showAddress"></x-address>
        <cell title="暂无评价">
        </cell>
      </group>
      <group>
        <tab :line-width="3">
          <tab-item :selected="tab_click === item" v-for="(item, index) in tab_list" :class="{'vux-1px-r': index===0||index===1}" @on-item-click="Gettab(item)" :key="index">{{item}}</tab-item>
        </tab>
        <p class="card_padding font_size_28rem text_indent_1em">这是{{tab_click}}内容</p>
      </group>

        <flexbox :gutter="0" class="fixed bg_white"  >
        <flexbox-item :span="2/9" ><div class="Shopping" @click="GoShop" >
          <img src="../assets/imgs/car_bg.png" alt="">
        </div></flexbox-item>
        <flexbox-item :span="7/9" @click.native="GoShop" ><div class="Shopping_bg font_size_30rem">
          ￥20.00加入购物车
        </div></flexbox-item>

        </flexbox>

    </div>
</template>

<script>
  import { mapState } from 'vuex'
  import {
    XAddress,
    ChinaAddressV4Data,
    InlineXNumber,
    Card, Cell,
    Flexbox, FlexboxItem,
    Tab, TabItem,
    Checker, CheckerItem } from 'vux'
  import TemSwiper from '../template/swiper/index'
  const imgList = [{
    url: 'javascript:',
    img: '../../static/imgs/swipper/1.jpg'
  }, {
    url: 'javascript:',
    img: '../../static/imgs/swipper/2.jpg',
    title: '送你一辆车'
  }, {
    url: 'javascript:',
    img: '../../static/imgs/swipper/3.jpg', // 404
    title: '送你一次旅行'
  }]
  export default {
    name: 'Details',
    data () {
      return {
        img_list: imgList,
        items: [{
          key: '1',
          value: '黑色色带架'
        }, {
          key: '2',
          value: '色带芯'
        }, {
          key: '3',
          value: '色带芯'
        }],
        type: {},
        addressData: ChinaAddressV4Data,
        address: [],
        showAddress: false,
        tab_list: ['产品详情', '规格参数', '常见问题'],
        tab_click: '产品详情'
      }
    },
    computed: {
      ...mapState({
        loading: state => state.app.loading
      })
    },
    components: {
      TemSwiper,
      Card,
      Cell,
      Flexbox,
      FlexboxItem,
      Checker,
      CheckerItem,
      InlineXNumber,
      XAddress,
      Tab,
      TabItem
    },
    methods: {
      onShadowChange (ids, names) {
        console.log(ids, names)
      },
      logHide (str) {
        console.log('on-hide', str)
      },
      logShow (str) {
        console.log('on-show')
      },
      Gettab (item) {
        console.log(item)
        this.tab_click = item
      },
      GoShop () {
        this.$router.push('/shop')
      }
    },
    mounted () {
      this.type = this.items[0]
    }
  }
</script>

<style scoped lang="less">
  .card_padding{
    padding: 5px 10px;
  }
  .click_item{
    padding: 5px 10px;
    border: 1px solid #efefef;
    margin: 0px 5px;
    border-radius: 2px;
  }
  .click_item_selected{
    border: 1px solid #FF5A00;
  }
  .active_vux_tab_selected {
    color: rgb(55, 174, 252) !important;
    border-bottom:1px solid transparent !important;
  }
  .fixed{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    height: 45px;

  }
  .Shopping{
    line-height: 45px;
    text-align: center;
    img{
      height: 20px;
      margin-top: 15px;
    }
  }
  .Shopping_bg{
    background: #FF5A00;
    height: 45px;
    line-height: 45px;
    text-align: center;
    color: #fff;
  }
  .icon_center{
    margin: 0 auto;
    display: inline-block;
  }
</style>
