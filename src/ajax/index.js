import axios from 'axios'
const axiosIns = axios.create({
  // http://www.mteen.cn:4000
  baseURL: 'http://www.mteen.cn:4000/api',
  timeout: 30000
})

// 添加请求拦截器
axiosIns.interceptors.request.use(function (config) {
  /***
   * axios的全局数据请求开始时候的拦截器
   * token是登陆之后获取的
   * 如果token存在那就把token放到接口头部进行处理
   * 如果报错则返回错误
   */
  config.credentials = 'include'
  config.withCredentials = true   //跨域设置缓存
  // config.headers['xhrFields'] = { withCredentials: true }
  return config
}, function (error) {
  return Promise.reject(error)
})

axiosIns.interceptors.response.use((res) => {
  /***
   * 请求到数据之后处理的动，response为数据请求完成之后执行的动作
   * 如果数据请求完成 则去除页面等待状态，
   * 注:需要配合loading组件进行配合使用
   * 对获取后的状态码进行处理 -99999 或-77777为token过期或者在另外一处登陆,
   * 需要清除用户信息缓存，并跳转到login页面
   * -88888为当前用户没有权限跳转到403页面
   */

  // 对响应数据做些事
  if (!res.data) {
    return Promise.reject(res)
  }
  return res
}, (error) => {
  return Promise.reject(error)
})
/***
 *
 * @type {string[]}
 * 数据请求的类型
 */
const ajaxMethod = ['get', 'post', 'put', 'delete']
const api = {}
/***
 * 循环ajaxMethod 来判断当前请求类型
 * 并创建promise对象 进行回调
 * promise为封装的回调函数 在当前.then函数执行完毕后才会执行下一个.then
 * 具体为 new Promise((func,resolve) =>{
 *      func为先执行的函数 resolve为后执行的函数，也就是需要当前事件完成之后需要执行的函数
 *      .then为数据请求成功后执行的事件
 *      .catch为当前接口请求失败后执行的事件
 * })
 */
ajaxMethod.forEach((method) => {
  api[method] = function (uri, data, config) {
    return new Promise(function (resolve, reject) {
      axiosIns[method](uri, data, config).then((response) => {
        console.log(response, 1111111111111111)
        if (response.status === 200) {
          // 200
          if (response.data.code === 1) {
            resolve(response.data)
          } else {
            // console.log('失败')
            reject(response.data)
          }
        }
      }).catch(function (error) {
        // console.log(error.response.status == 500);
        // if(error.response.status === 500){
        //   router.replace('/500')
        // }else if (error.response.status === 404) {
        //   router.replace('/404')
        // } else {
        //   router.replace('/403')
        // }

        reject(error)
      })
    })
  }
})
/***
 *
 * @type {{}}
 * 把api赋予到vue原型链实例上面进行全局使用
 * 注： api为封装好的axios原型
 */

export default api
