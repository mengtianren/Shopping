<template>
    <div>
      <tab bar-active-color="#668599"  :line-width="1" :scroll-threshold="5">
        <tab-item
          v-for="(list, index) in tab_list"
          :key="index"
          @on-item-click="ItemIndex(list.link)"
          :selected="index === 0" >{{list.name}}</tab-item>
      </tab>
      <router-view></router-view>
    </div>

</template>

<script>
  import {Tab, TabItem} from 'vux'
  export default {
    name: 'Market',
    data () {
      return {
        tab_list: [
          { name: '洗护喂养', link: 'clothes' },
          { name: '精选', link: 'selected' },
          { name: '奶瓶辅食', link: 'feeding '},
          { name: '尿裤湿巾', link: 'diaper'},
          { name: '儿童玩具', link: 'toys'},
          { name: '车床座椅', link: 'bed'},
          { name: '中外乐器', link: 'instruments'}
        ]
      }
    },
    components: {
      Tab,
      TabItem
    },
    methods: {
      ItemIndex (index) {
        console.log(index)
      }
    }
  }
</script>

<style scoped>

</style>
