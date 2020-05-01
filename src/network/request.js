import axios from 'axios'

export const request = (config) => {
  const instance1 = axios.create({
    // baseURL:'/data/home/multidata',
    timeout: 5000
  })
  // instance1.interceptors.response.use()

  instance1.interceptors.response.use(res => {
    return res.data
  })
  return instance1(config)
}

