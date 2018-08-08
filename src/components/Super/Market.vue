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

     <group v-if="new_content.length>0">
       <flexbox :gutter="0" wrap="wrap"  >
         <flexbox-item
           :span="1/2"
           v-for="(list, index) in new_content"
           :key="index">
           <TemCardOne :list="list" ></TemCardOne>
         </flexbox-item>
       </flexbox>
     </group>
      <group v-if="new_content.length<=0">
          <div class="text_align_center padding_15_5_5">
            <img width="100px" src="../../assets/imgs/favourite_blank.png" alt="">
            <p class="font_size_28rem">该分类下暂无商品！</p>
          </div>
    </group>
    </div>

</template>

<script>
  import { Tab, TabItem, Flexbox, FlexboxItem } from 'vux'
  import TemCardOne from '../../template/card/index_one'
  export default {
    name: 'Market',
    data () {
      return {
        tab_list: [],
        new_item: '全部',
        new_content: []
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
      GetDate () {
        this.$axios.post('/type/list')
          .then(res => {
            this.tab_list = res.data
          })
      },
      GetContent (id) {
        this.$axios.post('/commodity/list', {type_id: id})
          .then(res => {
            this.new_content = res.data
          }).catch(err => {
            this.$vux.alert.show({
              title: '提示',
              content: err.message
            })
          })
      },
      ItemIndex (list) {
        this.new_item = list.name
        console.log(list)
        this.GetContent(list.id)
      }
    },
    mounted () {
      this.GetDate()
      this.GetContent(0)
    }
  }
</script>

<style scoped>

</style>
