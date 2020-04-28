import {request} from './request'

export const getHomeMultidata = () => {
  return request({
    url:'api/data/home/multidata/multidata.json',
  })
}