// import Cookies from 'js-cookie';

const app = {
  state: {
    title: '首页',
    swiper_index: 0,
    loading: false
  },
  mutations: {
    SetSwiper (state, index) {
      console.log(index)
      state.swiper_index = index
    },
    SetTitle (state, title = 'app') {
      state.title = title
    },
    SetLoading (state, loading = false) {
      state.loading = loading
    }
  }
}
export default app
