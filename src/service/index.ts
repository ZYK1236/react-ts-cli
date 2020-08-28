/**
 * @description对axios做统一配置
 * 之前的问题是json-server只支持json格式化,但是我这里提交的是表单格式(qs处理了)
 * 
 */
import qs from 'qs'
import axios from 'axios'

const service = axios.create({
  baseURL: process.env.NODE_ENV == 'development' ? '/api' : '/', // api的base_url
  timeout: 50000 // 请求超时时间
})

/**
 *  @description添加请求拦截器
 */
service.interceptors.request.use(
  function (config) {

    /** 如果用token来鉴权的话 */
    
    // if (...) {
    //     config.headers.token = token;
    // }

    //对post的内容表单序列化
    config.method === 'post'
      ? (config.data = qs.stringify({ ...config.data }))
      : (config.params = { ...config.params })
    config.headers['Content-Type'] = 'application/x-www-form-urlencoded'

    return config
  },

  // 对请求错误做些什么
  function (error) {
    return Promise.reject(error)
  }
)

/**
 * @description拦截器对响应做处理
 */
service.interceptors.response.use(
  (response) => {
    //成功请求到数据
    return response.data
  },
  (error) => {
    //响应错误处理
    return Promise.reject(error)
  }
)

export default service
