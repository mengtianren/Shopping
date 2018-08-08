// import Cookies from 'js-cookie';

const app = {
  state: {
    user: JSON.parse(sessionStorage.getItem('user'))
  },
  mutations: {
    SetUser (state, user) {
      state.user = user
      sessionStorage.setItem('user', JSON.stringify(user))
    },
    ClearSession () {
      localStorage.clear()
      sessionStorage.clear()
    }
  }
}
export default app
