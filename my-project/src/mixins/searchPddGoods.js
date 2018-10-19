import wepy from 'wepy'

export default class SearchPddGoods extends wepy.mixin {
  searchPddGoods() {
    const url = this.$parent.globalData.host + this.$parent.globalData.searchGoods
    wepy
      .request({
        url: url,
        data: {
          page: this.currentPage,
          type: this.filterCount,
          keyword: this.keyword,
          page_size: this.page_size
        }
      })
      .then(res => {
        this.currentPage++
        this.Goods = res.data.data.list
        this.$apply()
        wepy.hideLoading()
      })
  }
  searchMorePddGoods() {
    const url = this.$parent.globalData.host + this.$parent.globalData.searchGoods
    wepy
      .request({
        url: url,
        data: {
          page: this.currentPage,
          type: this.filterCount,
          keyword: this.keyword,
          page_size: this.page_size
        }
      })
      .then(res => {
        this.currentPage++
        const arr1 = this.Goods
        const arr2 = res.data.data.list
        arr1.push.apply(arr1, arr2)
        this.Goods = arr1
        this.$apply()
        wepy.hideLoading()
      })
  }
}
