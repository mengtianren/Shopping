<template>
    <card>
      <div class="card_content" slot="content" @click="DetailUrl(list.id)" >
        <img :src="list.src">
        <p class="text_color_orange font_weight_bold">￥{{list.new_price}}</p>
        <p class="text_color_gray text_decoration_line_through">￥{{list.old_price}}</p>
      </div>
    </card>
</template>

<script>
  import { Card, Flexbox, FlexboxItem } from 'vux'

  export default {
    name: 'TemCard',
    props: {
      list: {
        type: Object
      }
    },
    data () {
      return {

      }
    },
    components: {
      Card,
      Flexbox,
      FlexboxItem
    },
    methods: {
      DetailUrl (id) {
        this.$router.push({
          name: 'details',
          params: {id: id}
        })
      }
    }
  }
</script>

<style scoped lang="less">
  .card_content{
    text-align: center;
    img{
      width: 80%;
    }
  }
</style>
