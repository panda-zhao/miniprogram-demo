// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  bindGoBack () {
    wx.navigateBack({
      delte: 1
    })
  }
})