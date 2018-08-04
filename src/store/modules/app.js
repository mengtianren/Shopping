// import Cookies from 'js-cookie';

const app = {
  state: {
    title: '首页',
    swiper_index: 0
  },
  mutations: {
    SetSwiper (state, index) {
      console.log(index)
      state.swiper_index = index
    },
    SetTitle (state, title = 'app') {
      state.title = title
    }
  }
}
export default app
