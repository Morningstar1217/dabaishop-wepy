import wepy from 'wepy'

export default class SearchJdGoods extends wepy.mixin {
  searchJdGoods() {
    const url = this.$parent.globalData.host + this.$parent.globalData.searchJdGood
    wepy
      .request({
        url: url,
        data: {
          page: this.currentPage,
          keyword: this.keyword,
          page_size: this.page_size
        }
      })
      .then(res => {
        if (res.data.code === -1 || res.data.data === '') {
          console.log('fail')
          this.Goods = []
          this.$apply()
        } else {
          this.currentPage++
          this.Goods = res.data.data.list
          this.$apply()
        }
        // wepy.hideLoading()
      }).catch(res => {
        console.log('fail')
        this.Goods = []
        this.$apply()
      })
    wepy.hideLoading()
  }
  searchMoreJdGoods() {
    const url = this.$parent.globalData.host + this.$parent.globalData.searchJdGood
    wepy
      .request({
        url: url,
        data: {
          page: this.currentPage,
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
