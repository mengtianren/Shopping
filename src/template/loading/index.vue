<template>
  <loading :show="loading" :text="text"></loading>
</template>

<script>
  import { Loading } from 'vux'
  import { mapState } from 'vuex'
  export default {
    name: 'TemLoading',
    props: {
      text: {
        type: String,
        default: '加载中...'
      }
    },
    components: {
      Loading
    },
    computed: {
      ...mapState({
        loading: state => state.app.loading
      })
    }
  }
</script>

<style scoped>

</style>
