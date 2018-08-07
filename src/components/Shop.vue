<template>
  <div>
    <group>
      <flexbox :gutter="0" v-for="(item, index) in flexbox" :key="index" >
        <flexbox-item :span="1/8" class="text_align_center" >
          <check-icon  @click.native="OnItemChange(index,item)" :value.sync="item"></check-icon>
        </flexbox-item>
        <flexbox-item :span="4/8">
          <panel :list="list" @on-img-error="onImgError"></panel>
        </flexbox-item>
        <flexbox-item :span="3/8" class="text_align_center" >
          <inline-x-number style="display:block;" :min="0" width="50px" button-style="round"></inline-x-number>
        </flexbox-item>
      </flexbox>
    </group>
    <flexbox :gutter="0" class="fixed bg_white"  >
      <flexbox-item :span="2/9" >
        <div class="Shopping" >
        <check-icon :value.sync="whole_check">全选</check-icon>
      </div>
      </flexbox-item>
      <flexbox-item :span="2/9" ></flexbox-item>
      <flexbox-item :span="3/9">
          <div class="text_align_left">
            <p class="font_size_30rem ">合计:<span class="text_color_orange">1200.00</span></p>
            <p class="font_size_28rem">优惠:<span class="text_color_orange">0.00</span></p>
          </div>
      </flexbox-item>
      <flexbox-item :span="2/9" @click.native="Gotoorder" ><div class="Shopping_bg font_size_30rem">
        去结算
      </div></flexbox-item>

    </flexbox>
    </div>
</template>

<script>
  import { Panel, Cell, InlineXNumber, Flexbox, FlexboxItem, CheckIcon } from 'vux'
  export default {
    name: 'Shop',
    data () {
      return {
        flexbox: [false, false, false],
        list: [{
          src: 'http://somedomain.somdomain/x.jpg',
          fallbackSrc: 'http://placeholder.qiniudn.com/60x60/3cc51f/ffffff',
          title: '标题一',
          desc: '￥20.00',
          url: '/component/cell'
        }],
        demo1Checkbox: [],
        whole_check: false,
        newArray: []

      }
    },
    components: {
      Panel,
      Cell,
      InlineXNumber,
      Flexbox,
      FlexboxItem,
      CheckIcon
    },
    watch: {
      whole_check: function (newVal, oldVal) {
        if (newVal) {
          this.flexbox.map((val, index) => {
            this.$set(this.flexbox, index, true)
          })
        }
      }
    },

    methods: {
      onImgError (item, $event) {
        console.log(item, $event)
      },
      OnItemChange (index, item) {
        this.$set(this.flexbox, index, item)
        if (item === false) {
          this.whole_check = item
        }
       this.newArray = this.flexbox.filter(item => item === true)
        if (this.newArray.length === this.flexbox.length) {
          this.whole_check = true
        }
      },
      Gotoorder () {
        console.log(this.newArray)
        if (this.newArray.length <= 0) {
          this.$vux.alert.show({
            title: '提示',
            content: '请选择商品进行结算',
          })
        } else {
          this.$router.push('/gotoorder')
        }
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
