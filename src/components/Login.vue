<template>
  <group class="font_size_28rem">
    <TemLoading></TemLoading>
    <x-input title="手机号" v-model="nick_mobile" name="mobile" placeholder="请输入手机号码" keyboard="number" is-type="china-mobile"></x-input>
    <x-input title="密码" v-model="nick_pass" type="password" placeholder="请输入密码"></x-input>
      <box gap="10px 10px">
        <x-button type="primary" @click.native="Login">登录</x-button>
      </box>
    <cell link="/register">
      <span class="font_size_28rem">还没账号？去注册</span>
    </cell>
  </group>
</template>

<script>
  import { Cell } from 'vux'
  import { mapMutations } from 'vuex'
  export default {
    name: 'Login',
    data () {
      return {
        nick_mobile: '',
        nick_pass: ''
      }
    },
    components: {
      Cell
    },
    methods: {
      ...mapMutations(['SetUser']),
      Login () {
        let params = {
          nick_mobile: this.nick_mobile,
          nick_pass: this.nick_pass
        }
        let _this = this
        this.$axios.post('/users/login', params)
          .then(res => {
            this.$store.commit('SetUser', res.data)
            this.$vux.alert.show({
              title: '提示',
              content: res.message,
              onHide () {
                _this.$router.push('/')
              }
            })
          }).catch(error => {
            this.$vux.alert.show({
              title: '错误',
              content: error.message
            })
          })
      }
    }
  }
</script>

<style scoped>

</style>
