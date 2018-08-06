<template>
  <div>
    <!--<loading :show="loading" text="加载中..."></loading>-->
    <TemSwiper :img_list="img_list" ></TemSwiper>
    <!--<flexbox :gutter="0" wrap="wrap" class="bg_white" >-->
      <!--<flexbox-item :span="1/5" ><div class="flex" @click="LinkUrl('market')" ><img src="../../static/imgs/banner/1.png"><p>超市</p></div></flexbox-item>-->
      <!--<flexbox-item :span="1/5" ><div class="flex"><img src="../../static/imgs/banner/2.png"><p>全球购</p></div></flexbox-item>-->
      <!--<flexbox-item :span="1/5" ><div class="flex"><img src="../../static/imgs/banner/3.png"><p>服饰</p></div></flexbox-item>-->
      <!--<flexbox-item :span="1/5" ><div class="flex"><img src="../../static/imgs/banner/4.png"><p>生鲜</p></div></flexbox-item>-->
      <!--<flexbox-item :span="1/5" ><div class="flex"><img src="../../static/imgs/banner/5.png"><p>到家</p></div></flexbox-item>-->
      <!--<flexbox-item :span="1/5" ><div class="flex"><img src="../../static/imgs/banner/6.png"><p>充值</p></div></flexbox-item>-->
      <!--<flexbox-item :span="1/5" ><div class="flex"><img src="../../static/imgs/banner/7.png"><p>9.9元拼</p></div></flexbox-item>-->
      <!--<flexbox-item :span="1/5" ><div class="flex"><img src="../../static/imgs/banner/8.png"><p>领券</p></div></flexbox-item>-->
      <!--<flexbox-item :span="1/5" ><div class="flex"><img src="../../static/imgs/banner/9.png"><p>赚钱</p></div></flexbox-item>-->
      <!--<flexbox-item :span="1/5" ><div class="flex"><img src="../../static/imgs/banner/10.png"><p>全部</p></div></flexbox-item>-->
    <!--</flexbox>-->
    <TemMarquee class="margin_bottom_10 margin_top_0"></TemMarquee>
    <flexbox :gutter="0"  >
      <flexbox-item :span="1/second_kill.length"
                    v-for="(list, index) in second_kill"
                    :key="index">
        <TemCardTwo :list="list"></TemCardTwo>
      </flexbox-item>
    </flexbox>
    <divider>明星单品</divider>
    <flexbox :gutter="0" wrap="wrap" >
      <flexbox-item
        :span="1/2"
        v-for="(list, index) in second_kill"
        :key="index">
          <TemCardOne :list="list" ></TemCardOne>
      </flexbox-item>
    </flexbox>
    <divider>新品上市</divider>
  </div>
</template>

<script>
  import { Flexbox, FlexboxItem, Divider } from 'vux'
  import { mapState } from 'vuex'
  import TemSwiper from '../template/swiper/index'
  import TemCardOne from '../template/card/index_one'
  import TemCardTwo from '../template/card/index_two'
  import TemMarquee from '../template/marquee/index'
  const imgList = [{
    url: 'javascript:',
    img: '../../static/imgs/swipper/1.jpg'
  }, {
    url: 'javascript:',
    img: '../../static/imgs/swipper/2.jpg',
    title: '送你一辆车'
  }, {
    url: 'javascript:',
    img: '../../static/imgs/swipper/3.jpg', // 404
    title: '送你一次旅行'
  }]
  const Secondkill = [
    {id: 0, src: '../../static/imgs/5a9f56adN0f9f336a.jpg', name: '超市', new_price: 1000, old_price: 900},
    {id: 1, src: '../../static/imgs/5a9f56adN0f9f336a.jpg', name: '钱包', new_price: 1000, old_price: 900},
    {id: 2, src: '../../static/imgs/5a9f56adN0f9f336a.jpg', name: '钱包', new_price: 1000, old_price: 900},
    {id: 3, src: '../../static/imgs/5a9f56adN0f9f336a.jpg', name: '钱包', new_price: 1000, old_price: 900}
  ]
  export default {
    data () {
      return {
        img_list: imgList,
        second_kill: Secondkill
      }
    },
    components: {
      Flexbox,
      FlexboxItem,
      TemSwiper,
      TemCardOne,
      TemCardTwo,
      TemMarquee,
      Divider
    },
    computed: {
      ...mapState({
        loading: state => state.app.loading
      })
    },
    methods: {
      LinkUrl (item) {
        this.$router.push({path: `super/${item}`})
      },
      LinkDetail (id) {
        alert(1)
        this.$router.push({
          name: 'details',
          params: {id: id}
        })
      }
    },
    created () {}
  }
</script>
<style scoped lang="less" >
  .flex {
    text-align: center;
    color: #999;
    /*background-color: #20b907;*/
    /*border: 1px solid #efefef;*/
    background-clip: padding-box;
    padding: 5px 5px 0;
    img{
      display: block;
      margin: 0 auto;
      width: 75%;
    }
    .flex p{
      font-size: 0.28rem;
    }
  }

  .bg_white{
    background-color: #ffffff;
  }
</style>
