import request from './index';

export function getDjRadioCatelist() {
  return request({
    url: `/dj/catelist`
  })
}

export function getDjRadioRecommend(type) {
  return request({
    url: "/dj/recommend/type",
    params: {
      type
    }
  })
}

export function getDjRadios(cateId, limit, offset) {
  return request({
    url: "/dj/radio/hot",
    params: {
      cateId,
      limit,
      offset
    }
  })
}
// 轮播图
export function getBanners() {
  return request({
    url: `/banner?type=${0}${new Date().getTime()}`,
  })
}
// 热门推荐
export function personalized(limit = 8) {
  return request({
    url: '/personalized',
    params: {
      limit
    }
  })
}
// 新碟上架
export function getAlbum(limit = 10) {
  return request({
    url: '/top/album',
    params: {
      limit
    }
  })
}