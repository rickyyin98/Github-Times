// miniprogram/pages/thirdPart/thirdPart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  back: function () {
    wx.navigateTo({
      url: '/pages/firstPart/firstPart',
    })
  },

  go: function () {
    wx.navigateTo({
      url: '/pages/thirdPart/thirdPart',
    })
  },

})