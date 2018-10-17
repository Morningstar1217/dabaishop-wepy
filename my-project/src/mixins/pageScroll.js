import wepy from 'wepy'

export default class Pagescroll extends wepy.mixin {
  pageScrollTo() {
    wepy.pageScrollTo({
      scrollTop: 0
    })
  }
}
