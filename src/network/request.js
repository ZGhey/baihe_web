import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: '',
    timeout:
  })

  instance.interceptors.request.use(config => {

  }, err => {

  })
  isntance.interceptors.response.use(config => {

  }, err => {

  })

  return instance(config)
}
