<template>
  <div>
    <x-header :right-options="{showMore: true}" @on-click-more="MoreShow">{{title}}</x-header>
    <!--<x-header><a slot="right">Feedback</a></x-header>-->
  </div>
</template>

<script>
  import { XHeader } from 'vux'
  import { mapState } from 'vuex'
  export default {
    name: 'TemHeader',
    data () {
      return {
        more: false
      }
    },
    computed: {
      ...mapState({
        title: state => state.app.title
      })
    },
    components: {
      XHeader
    },
    methods: {
      MoreShow () {
        this.more = !this.more
        console.log('更多')
        this.$emit('MoreShow', this.more)
      }
    }
  }
</script>

<style scoped>

</style>
