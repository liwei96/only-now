import axios from 'axios'

axios.interceptors.request.use(function (config) {
  // 处理请求之前的配置
  if(config.method == 'get'){
    config.params.uuid = localStorage.getItem('uuid')
  }else{
    if(config.data){
      config.data.uuid = localStorage.getItem('uuid')
    }else{
      config.params.uuid = localStorage.getItem('uuid')
    }
  }
  return config
}, function (error) {
  // 请求失败的处理
  return Promise.reject(error)
})
export const get = (id,other) => {
    return axios.request({
        method:'get',
        url:'/detail',
        params:{id:id,other:other}
    })
}

export const msg = (msg) => {
    return axios.request({
      method: 'post',
      url: '/front/flow/send',
      data: msg
    })
  }

  export const verification = (msg) => {
    return axios.request({
      method: 'post',
      url: '/front/flow/sure',
      data: msg
    })
  }


  export const top_sure = (msg) => {
    return axios.request({
      method: 'post',
      url: '/front/flow/sign',
      data: msg
    })
  }