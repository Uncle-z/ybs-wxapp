//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    active: 0,
    imageURL: 'https://weapp-static.mifengchengshi.com/ybsrmt/ldimg/listpic.jpg'
  },
  onChange(event) {
    // event.detail 的值为当前选中项的索引
    this.setData({ active: event.detail });
  }
})
