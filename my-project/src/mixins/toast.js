import wepy from 'wepy'

export default class extends wepy.mixin {
  showLoading() {
    wepy.showLoading({
      title: '拼命加载中...'
    })
  }
  setColSuccess() {
    wepy.showToast({
      title: '收藏成功',
      icon: 'success'
    })
  }
}
