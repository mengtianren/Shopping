<template>
  <group>
    <cell title="最新资讯">
      <marquee>
        <marquee-item v-for="i in 5" :key="i" @click.native="onClick(i)" class="font_size_28rem">{{ '商品价值表现在货币上的数量'}} {{i}}</marquee-item>
      </marquee>
    </cell>
  </group>
</template>

<script>
  import {Group, Cell, Marquee, MarqueeItem} from 'vux'
  export default {
    name: 'TemMarquee',
    components: {
      Group,
      Cell,
      Marquee,
      MarqueeItem
    },
    methods: {
      onClick (id) {
        // this.$router.push({
        //   name: 'news',
        //   params: {id: id}
        // })
        window.location = 'http://m.i360mall.com/m/act/EYln0ScyorBWX.html'
        console.log(id)
      }
    }
  }
</script>

<style scoped>

</style>
