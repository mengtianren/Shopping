<template>
  <card>
    <div slot="content" class="padding_15_5_5 text_align_center border_one" @click="DetailUrl" >
      <p>小米手机</p>
      <img src="../../../static/imgs/commodity/mix2.jpg" alt="">
      <p class="font_size_30rem text_align_left text_indent_1em text_color_orange font_weight_bold">￥123</p>
      <p class="font_size_28rem text_align_left text_indent_1em text_overflow padding_0_5">蜗牛移动又添新成员,专为流量用户定制的4G畅享卡、4G心享卡来啦！无论您是流量大户还是小流量用户,我们都能满足您的需求!</p>
    </div>
  </card>
</template>

<script>
  import { Card } from 'vux'
  export default {
    name: 'TemCardOne',
    props: {
      list: {
        type: Object
      }
    },
    components: {
      Card
    },
    methods: {
      DetailUrl () {
        this.$router.push({
          name: 'details',
          params: {id: this.list.id}
        })
      }
    }
  }
</script>

<style scoped>
.border_one:nth-of-type(2n-1){
  border-right: 1px solid #efefef;
}
</style>
