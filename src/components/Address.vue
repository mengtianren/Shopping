<template>
 <group>
    <box gap="10px 10px">
      <x-button type="primary" v-if="!address_show" @click.native="address_show=true" >添加收货地址</x-button>
    </box>
    <div v-if="address_show"   >
      <x-input title="收货人" is-type="china-name" placeholder="请输入收货人"></x-input>
      <x-address
        @on-hide="logHide"
        @on-show="logShow"
        title="收货地址"
        v-model="address"
        :list="address_data"
        @on-shadow-change="onShadowChange"
        placeholder="请选择地址"
        :show.sync="show_address"></x-address>
      <x-input title="详细地址" placeholder="请输入详细地址"></x-input>
      <x-input title="手机号码" is-type="china-mobile" placeholder="请输入手机号码"></x-input>
      <x-input title="邮政编号" type="number"  placeholder="请输入邮政编号"></x-input>
      <box gap="10px 10px" >
        <flexbox>
          <flexbox-item>
            <x-button type="warn">取消</x-button>
          </flexbox-item>
          <flexbox-item>
            <x-button type="primary">添加</x-button>
          </flexbox-item>
        </flexbox>
      </box>
    </div>
  </group>
</template>

<script>
  import { XAddress, ChinaAddressV4Data, Flexbox, FlexboxItem } from 'vux'
  export default {
    name: 'Address',
    data () {
      return {
        address: [],
        address_show: false,
        show_address: false,
        address_data: ChinaAddressV4Data,
        user: {}
      }
    },
    components: {
      XAddress,
      Flexbox,
      FlexboxItem
    },
    methods: {
      onShadowChange (ids, names) {
        console.log(ids, names)
      },
      logHide (str) {
        console.log('on-hide', str)
      },
      logShow (str) {
        console.log('on-show')
      }
    }
  }
</script>

<style scoped>

</style>
