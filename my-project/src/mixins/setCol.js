import wepy from 'wepy'

export default class extends wepy.mixin {
  setCol(sku, title, couponLink, marketprice, price, pic) {
    const url = this.$parent.globalData.host + this.$parent.globalData.setFavorite
    const unionid = wepy.getStorageSync('unionid')
    if (this.shopId === '0') {
      this.pingtai = 'pdd'
    } else {
      this.pingtai = 'jd'
    }
    wepy
      .request({
        url: url,
        data: {
          unionid: unionid,
          sku: sku,
          title: title,
          couponLink: couponLink,
          market_price: marketprice,
          price: price,
          pic: pic,
          pingtai: this.pingtai
        }
      })
      .then(res => {
        if (res.data.code === 1) {
          this.setColSuccess()
        }
      })
  }
}
