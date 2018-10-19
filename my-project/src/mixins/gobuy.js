import wepy from 'wepy'

export default class extends wepy.mixin {
  goBuy(sku, couponLink, title, marketprice, price, pic, pingtai) {
    console.log(pingtai)
    this.footprint = wepy.getStorageSync('footprint')
    if (!this.footprint) {
      this.footprint = []
    }

    var arr2 = []
    if (pingtai !== 'jd' && pingtai !== 'pdd') {
      if (this.shopId === '0') {
        pingtai = 'pdd'
      } else {
        pingtai = 'jd'
      }
    }
    const foot = {
      pic: pic,
      price: price,
      title: title,
      sku: sku,
      couponLink: couponLink,
      market_price: marketprice,
      pingtai: pingtai
    }

    this.footprint.forEach(ele => {
      if (sku !== ele.sku) {
        arr2.push(ele)
      }
    })

    arr2.unshift(foot)
    wepy.setStorage({
      key: 'footprint',
      data: arr2
    })
  }
}
