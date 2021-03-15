import axios from 'axios'

const uid = localStorage.getItem('uid')
const instance = axios.create({
  baseURL: 'https://musicapi.leanapp.cn/',
  timeout: 5000,
  timeoutErrorMessage: '请求超时'
})

instance.interceptors.request.use((config) => {
  if (uid) {
    config.params['uid'] = uid
  }
  return config
}, (error) => {
  return Promise.reject(error)
})

instance.interceptors.response.use(response => {
  console.log('response: ', response)
  return response
}, (error) => {
  return Promise.reject(error)
})

export default instance