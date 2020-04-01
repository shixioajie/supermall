import {mockData, request} from "./request";

export function getHomeData() {
  return request({
    url: 'home/multidata'
  })
}

export function getHomeGoods(type, page) {
  return mockData({
    url: 'cH4k52df4d7a11ecf8311f606dc7a46116af8c0208b3f75',
    params: {
      uri: type,
      page: page
    }
  })
}
