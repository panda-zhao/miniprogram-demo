// pages/upload/upload.js
var util = require('../../utils/util.js')
Page({
  data: {
    singlePreview: [],//单图预览图
    SINGLE_PATH: '',// 单图网络路径

    multiPreview: [],//多图预览图
    MULTI_PATH: [],//多图网络路径
  },

  /* 单图上传 */ 
  chooseSingleImage: function (e) {
    
    util.chooseImage(1, (temPath) => {
      this.setData({ singlePreview: temPath })// 单图直接重新赋值tempath
      // 上传单图图片
      util.upload(temPath, (path) => {
        this.data.SINGLE_PATH = path // 更新 单图网络路径
        // console.log('单图网络路径', this.data.SINGLE_PATH)
      })
    })

  },
   /* 单图上传预览 */
  previewSingleImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.singlePreview // 需要预览的图片http链接列表
    })
  },


  // 多图上传
  chooseMultiImage: function (e) {
    util.chooseImage(9, (temPath) => {
      this.setData({ multiPreview: this.data.multiPreview.concat(temPath) })// 多图concat合并数组
      // 上传多图图片
      util.upload(temPath, (path) => {
        this.data.MULTI_PATH.push( path )// 把路径插入到 网络路径数组 内
        // console.log('【网络路径数组】', this.data.MULTI_PATH)
      })

    })
  },
  // 多图预览
  previewMultiImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.multiPreview // 需要预览的图片http链接列表
    })
  },

  submitForm(){
    var params = {
      SINGLE_PATH: this.data.SINGLE_PATH,
      MULTI_PATH: this.data.MULTI_PATH
    }
    console.log(params)
  }


})