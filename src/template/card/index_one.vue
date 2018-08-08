<template>
  <card>
    <div slot="content" class="padding_15_5_5 text_align_center border_one" @click="DetailUrl" >
      <p>{{list.name}}</p>
      <img width="100%" height="200px" :src="list.url" alt="">
      <p class="font_size_30rem text_align_left text_indent_1em text_color_orange font_weight_bold">￥{{list.price}}.00</p>
      <p class="font_size_28rem text_align_left text_indent_1em text_overflow padding_0_5">库存：{{list.number}}</p>
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
