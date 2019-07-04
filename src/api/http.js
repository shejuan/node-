import Vue from 'vue'
import axios from 'axios'
import stringify from 'qs/lib/stringify'

Vue.prototype.$http = axios

const host = 'http://localhost:3000'

// build http header
function buildHeader (option) {
  let headers = {
    // 'X-Application-Key': config.api.key,
    // 'X-Request-Sign': '',
  }
  if (option) {
    headers = { ...headers,
      ...option
    }
  }
  return headers
}

function transformResponse (data) {
  // if (data) {
  //   if (data.code === 0) {
  //     let res = data.data
  //     return res
  //   } else if (data && data.code === 2) {
  //     // 登录过期
  //     console.log('登录过期，请重新登录')
  //     // 执行一次登出操作，清除登录信息
  //     // store.dispatch('login/logout')
  //     throw new axios.Cancel('登录过期')
  //   } else {
  //     let msg = data.msg || 'Unknow Error'
  //     throw new Error(msg)
  //   }
  // } else {
  //   let msg = 'Unknow Error'
  //   throw new Error(msg)
  // }
  return data
}

export let ax = axios.create({
  baseURL: host,
  headers: buildHeader(),
  timeout: 10000,
  responseType: 'json',
  transformRequest: [function (data) {
    console.log('qq', data)
    if (data instanceof FormData) return data
    console.log('要序列化的，因为成功的发送了请求', data)
    // return data
    return stringify(data)
  }],
  transformResponse: [function (data) {
    console.log('响应了你发送的请求', data)
    return transformResponse(data)
  }]

})

// http get method
export function get (url, data) {
  let newData = '?data=' + JSON.stringify(data)
  // let newData = '?data=' + JSON.stringify(processData(data)) // 这步要检测token 是否过期
  return ax.get(decodeURI(url + newData)).then((res) => {
    // console.log('请求成功返回来的参数', res.data)
    return res.data
    // console.log('请求成功返回来的参数', res, decodeURI(url + newData))
    // return res
  }).catch((err) => {
    // handleError(err) 请求失败的处理方式
    console.log('请求失败的处理方式')
    throw err
  })
}

// http post method
export function post (url, data) {
  // let newData = '?data=' + JSON.stringify(processData(data)) // 这步要检测token 是否过期
  return ax.post(url, {
    data: JSON.stringify(data)
  }).then((res) => {
    // console.log('请求成功返回来的参数', res.data)
    // return res.data
    console.log('post请求成功返回来的参数', res)
    return res
  }).catch((err) => {
    // handleError(err) 请求失败的处理方式
    console.log('请求失败的处理方式')
    throw err
  })
}
