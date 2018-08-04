<template>
  <swiper
    :list="img_list"
    v-model="swiper_index.swiper_index"
    @on-index-change="SetSwiper"
    :auto="true"
    :loop="true"
    :aspect-ratio="0.5"
  ></swiper>
</template>

<script>
  import { Swiper } from 'vux'
  import { mapMutations, mapState } from 'vuex'
  export default {
    name: 'TemSwiper',
    props: {
      img_list: {
        type: Array
      }
    },
    data () {
      return {}
    },
    components: {Swiper},
    computed: {
      ...mapState({
        swiper_index: state => state.app
      })
    },
    methods: {
      ...mapMutations([ 'SetSwiper' ])
    }
  }
</script>

<style scoped>

</style>
