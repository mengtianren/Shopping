<template>
  <div>
    <group>
    <cell is-link link="/address">
      <div class="font_size_28rem" slot="title">你还没有添加地址信息，点击编辑~</div>
    </cell>
  </group>
    <group>
      <cell is-link link="/coupon" >
        <span slot="title" class="font_size_28rem" >使用优惠券</span>
        <span class="text_color_gray font_size_28rem">未使用</span>
      </cell>
      <cell title="发票信息" value="个人发票" is-link >
        <span slot="title" class="font_size_28rem" >发票信息</span>
        <span class="text_color_gray font_size_28rem">个人发票</span>
      </cell>
    </group>
    <group>
      <flexbox :gutter="0"  >
        <flexbox-item :span="7/8"  >
          <panel class="font_size_28rem" :list="list" @on-img-error="onImgError"></panel>
        </flexbox-item>
        <flexbox-item :span="1/8">
          x1
        </flexbox-item>
      </flexbox>
      <card >
        <div slot="content">
          <cell>
            <span slot="title" class="font_size_28rem" >商品总价</span>
            <span class="text_color_orange font_size_28rem">￥12.00</span>
          </cell>
          <cell>
            <span slot="title" class="font_size_28rem" >优惠抵扣</span>
            <span class="text_color_gray font_size_28rem">￥0.00</span>
          </cell>
          <cell>
            <span slot="title" class="font_size_28rem" >运费</span>
            <span class="text_color_gray font_size_28rem">￥0.00</span>
          </cell>
        </div>
      </card>
    </group>
    <flexbox :gutter="0" class="fixed bg_white"  >
      <flexbox-item :span="2/9"></flexbox-item>
      <flexbox-item :span="5/9">
        <div class="text_align_left">
          合计:<span class="text_color_orange font_size_30rem">￥1200.00</span>
        </div>
      </flexbox-item>
      <flexbox-item :span="2/9" @click.native="Gotoorder" ><div class="Shopping_bg font_size_30rem">
        去支付
      </div></flexbox-item>

    </flexbox>
  </div>

</template>

<script>
  import { Cell, Panel, Flexbox, FlexboxItem, Card } from 'vux'
  export default {
    name: 'Gotoorder',
    data () {
      return {
        list: [{
          src: 'http://somedomain.somdomain/x.jpg',
          fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '360手机 N6 Pro 全网通 6GB+64GB 钛泽银色 移动联通电信4G手机 双卡双待 全面屏 游戏手机',
          desc: '￥20.00',
          url: '/component/cell'
        }]
      }
    },
    components: {
      Cell,
      Panel,
      Flexbox,
      FlexboxItem,
      Card
    },
    methods: {
      onImgError (item, $event) {
        console.log(item, $event)
      }
    }
  }
</script>

<style scoped lang="less">
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
