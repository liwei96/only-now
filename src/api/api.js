import axios from 'axios'


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