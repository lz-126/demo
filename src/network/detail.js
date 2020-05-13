import { request } from "./request"
export function GetDatailData(iid) {
  return request({
    url: '/data/detail/' + iid + '.json'
  })
}
export class GoodsInfo {
  constructor(itemInfo, columns, shopInfo) {
    this.title = itemInfo.title
    this.price = itemInfo.price
    this.oldPrice = itemInfo.oldPrice
    this.discount = itemInfo.discountDesc
    this.columns = columns
    this.services = shopInfo
    this.discountBgColor = itemInfo.discountBgColor
    this.desc = itemInfo.desc
    this.highNowPrice = itemInfo.highNowPrice
  }
}
export class Shop {
  constructor(shopInfo) {
    this.logo = shopInfo.shopLogo;
    this.name = shopInfo.name;
    this.fans = shopInfo.cFans;
    this.sells = shopInfo.cSells;
    this.score = shopInfo.score;
    this.goodsCount = shopInfo.cGoods;
  }
}
export class GoodsParams {
  constructor(info, rule) {
    this.img = info.images ? info.images[0] : '';
    this.info = info.set
    this.size = rule.tables
  }
}
export function getRecommendData() {
  return request({
    url: '/data/detail/recommend.json'
  })
}