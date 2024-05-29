import environment from '../../environments/environment'
import axios from 'axios'
const token = localStorage.getItem('access_token') || null
const Bearer = 'Bearer '
const { baseUrl } = environment

const httpCommon = axios.create({
  baseURL: baseUrl,
  headers: {
    Authorization: Bearer + token,
    'application-id': 2,
    'Content-Type': 'application/json', 
  },
})
// Interceptor to set Content-Type based on request method
httpCommon.interceptors.request.use((config) => {
  // if (config.method === 'post' || config.method === 'put'||config.method==='get' ) {
  //   config.headers['Content-Type'] = 'application/json';
  // }
  if (config.method === 'get' && !config.headers['Content-Type']) {
    config.headers['Content-Type'] = 'application/json'
  }
  return config
})
export default httpCommon
