<template>
    <!--<div>-->
      <search
        @result-click="resultClick"
        @on-change="getResult"
        :results="results"
        v-model="value"
        auto-fixed
        auto-scroll-to-top
        @on-focus="onFocus"
        @on-cancel="onCancel"
        @on-submit="onSubmit"
        :top="top+'px'"
        ref="search">
        <!--<x-icon v-show="logo_show" slot="left" class="logo logo_left" type="ios-help-outline" size="30"></x-icon>-->
        <!--<x-icon  v-show="logo_show" slot="right" class="logo logo_right" type="ios-heart-outline" size="30"></x-icon>-->
        <!--<img class="logo"  src="../../../static/imgs/top-jdlogo.png" alt="">-->
      </search>
    <!--</div>-->
</template>

<script>
  import { Search } from 'vux'
  export default {
    name: 'TemSearch',
    props: {
      top: {
        type: Number,
        default: 0
      }
    },

    data () {
      return {
        results: [],
        value: '',
        logo_show: true
      }
    },
    components: {
      Search
    },
    methods: {
      resultClick (item) {
        window.alert('you click the result item: ' + JSON.stringify(item))
      },
      getResult (val) {
        console.log('on-change', val)
        this.results = val ? getResult(this.value) : []
      },
      onSubmit () {
        this.$refs.search.setBlur()
        this.$vux.toast.show({
          type: 'text',
          position: 'top',
          text: 'on submit'
        })
      },
      onFocus () {
        console.log('on focus')
        this.logo_show = false
      },
      onCancel () {
        console.log('on cancel')
        this.logo_show = true
      }
    }
  }
  function getResult (val) {
    let rs = []
    for (let i = 0; i < 20; i++) {
      rs.push({
        title: `${val} result: ${i + 1} `,
        other: i
      })
    }
    return rs
  }
</script>

<style scoped>

  .logo{
    color: #fff;
  }
  .logo_left{
    margin-right: 5px;
  }
  .logo_right{
    margin-left: 5px;
  }
</style>
