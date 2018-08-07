<template>
    <div>
      <TemLoading></TemLoading>
      <tab bar-active-color="#668599"  :line-width="1" :scroll-threshold="5">
        <tab-item
          v-for="(list, index) in tab_list"
          :key="index"
          @on-item-click="ItemIndex(list)"
          :selected="index === 0" >{{list.name}}</tab-item>
      </tab>

      <div>这是显示的{{new_item}}内容</div>
      <flexbox :gutter="0" wrap="wrap" >
        <flexbox-item
          :span="1/2"
          v-for="(list, index) in new_content"
          :key="index">
          <TemCardOne :list="list" ></TemCardOne>
        </flexbox-item>
      </flexbox>
      <!--<router-view></router-view>-->
    </div>

</template>

<script>
  import { Tab, TabItem, Flexbox, FlexboxItem } from 'vux'
  import TemCardOne from '../../template/card/index_one'
  const newContent = [
    {id: 0, src: '../assets/imgs/5a9f56adN0f9f336a.jpg', name: '超市', new_price: 1000, old_price: 900},
    {id: 1, src: '../assets/imgs/5a9f56adN0f9f336a.jpg', name: '钱包', new_price: 1000, old_price: 900},
    {id: 2, src: '../assets/imgs/5a9f56adN0f9f336a.jpg', name: '钱包', new_price: 1000, old_price: 900},
    {id: 3, src: '../assets/imgs/5a9f56adN0f9f336a.jpg', name: '钱包', new_price: 1000, old_price: 900}
  ]

  export default {
    name: 'Market',
    data () {
      return {
        tab_list: [
          { name: '洗护喂养', link: 'clothes' },
          { name: '精选', link: 'selected' },
          { name: '奶瓶辅食', link: 'feeding' },
          { name: '尿裤湿巾', link: 'diaper' },
          { name: '儿童玩具', link: 'toys' },
          { name: '车床座椅', link: 'bed' },
          { name: '中外乐器', link: 'instruments' }
        ],
        new_item: '洗护喂养',
        new_content: newContent
      }
    },
    components: {
      Tab,
      TabItem,
      Flexbox,
      FlexboxItem,
      TemCardOne
    },
    methods: {
      ItemIndex (list) {
        this.new_item = list.name
      }
    }
  }
</script>

<style scoped>

</style>
