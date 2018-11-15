  import wepy from 'wepy'
  
  export default class extends wepy.mixin{
    getDays() {
        let myDate = new Date()
        let arr1 = []
        myDate.setMonth(myDate.getMonth() + 1)
        myDate.setDate(0)
        let days = myDate.getDate()
        for (let i = 0; i < days; i++) {
          arr1.push(i)
        }
        this.days = arr1
      }
  }

  
