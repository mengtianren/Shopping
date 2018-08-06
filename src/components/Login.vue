<template>
  <group class="font_size_28rem">
    <x-input title="手机号" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
    <x-input title="密码" type="password" placeholder="请输入密码"></x-input>
      <box gap="10px 10px">
        <x-button type="primary" @click.native="Login">登录</x-button>
      </box>
  </group>
</template>

<script>
  import { Group, XInput, Box, XButton } from 'vux'
  export default {
    name: 'Login',
    components: {
      XInput,
      Group,
      Box,
      XButton
    },
    methods: {
      Login () {
        this.$vux.loading.show({
          text: '正在登录'
        })
        this.$cookies.set('login', true)
        this.$router.push('/')
        this.$vux.loading.hide()
      }
    }
  }
</script>

<style scoped>

</style>
