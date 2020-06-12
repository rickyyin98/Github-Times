//index.js
const app = getApp()

Page({
  data: {
    //openid: '',
  },
  onLoad: function () {
    //this.getOpenId();
  },
  firstPart: function () {
    wx.navigateTo({
      url: '/pages/firstPart/firstPart',
    })
  },
  secondPart: function () {
    wx.navigateTo({
      url: '/pages/secondPart/secondPart',
    })
  },
  thirdPart: function () {
    wx.navigateTo({
      url: '/pages/thirdPart/thirdPart',
    })
  },
  forthPart: function () {
    wx.navigateTo({
      url: '/pages/forthPart/forthPart',
    })
  },
})
