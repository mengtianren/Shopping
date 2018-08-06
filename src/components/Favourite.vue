<template>
  <group>
    <div class="text_align_center padding_15_5_5">
      <img class="img_width" src="../assets/imgs/favourite_blank.png" alt="">
      <p class="font_size_28rem">您还没有喜欢的商品哦！</p>
      <box gap="10px 10px">
        <x-button mini type="primary" link="/super/market" >去逛逛</x-button>
      </box>
    </div>
  </group>
</template>

<script>
  import { Group, XButton, Box } from 'vux'
  export default {
    name: 'Favourite',
    components: {
      Group,
      XButton,
      Box
    }
  }
</script>

<style scoped>
  .img_width{
    width: 100px;
  }
</style>
