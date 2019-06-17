// pages/form/form.js
const util = require('../../utils/util.js')
Page({
  data: {
    INPUT_VALUE: '',
    RADIO: '1',
    CHECKBOX: ['002'],
    PREVIEW_IMG: '',//单图预览图
    PREVIEW_IMGS: [],// 多图预览图
    NETWORK_PATH: '', // 单图上传网络路径
    NETWORK_PATHS: [] // 多图上传网络路径
  },
  onLoad: function (options) {

  },
  
  // 输入同步
  bindKeyInput: function(e){
    console.log('输入同步', e.detail.value)
    this.setData({ INPUT_VALUE: e.detail.value})
  },
  // 获取输入框最终值
  bindblur(e){
    console.log('输入框最终值', e.detail.value)
    this.setData({ INPUT_VALUE: e.detail.value })
  },

  // 切换单选按钮时
  radioChange:function(e){
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    this.setData({ RADIO: e.detail.value })
  },

  // 切换复选按钮时
  checkboxChange(e) {
    console.log('checkbox发生change事件，携带value值为：', e.detail.value)
    this.setData({ CHECKBOX: e.detail.value })
    
  },

  // 选择单图
  uploadImg() {
    util.chooseImage(1, (temPath)=>{
      console.log('【选择图片后暂存路径】', temPath)
      this.setData({ PREVIEW_IMG: temPath[0]})// 设置预览
      // 上传单图图片
      util.upload(temPath,(path)=>{
        console.log('【上传成功后的网络路径】', path) // 数据类型：字符串
        this.data.NETWORK_PATH = path// 更新 单图上传网络路径
      })
      console.log('单图上传网络路径', this.data.NETWORK_PATH)
    })

  },

  // 选择多图
  uploadImgs(){
    util.chooseImage(9, (temPath) => {
      console.log('【选择图片后暂存路径】', temPath)
      this.setData({ PREVIEW_IMGS: temPath })// 设置本地预览

      // 上传图片
      util.upload(temPath, (path) => {
        console.log('【上传成功后的网络路径】', path)//上传成功图片的网络路径字符串
        this.data.NETWORK_PATHS.push(path) // 插入到 多图上传网络路径 数组
      })
      
    })
  },

  submitForm:function(){
    var params = {
      INPUT_VALUE: this.data.INPUT_VALUE,
      RADIO: this.data.RADIO,
      CHECKBOX: this.data.CHECKBOX,
      NETWORK_PATH: this.data.NETWORK_PATH,
      NETWORK_PATHS: this.data.NETWORK_PATHS 
    }
    console.log(params)

    return
    wx.showLoading({ title: '加载中' })
    wx.request({
      url: require('../../config.js').index,
      data: params,
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      method: 'POST',
      dataType: 'json',
      success: (res) => {
        wx.hideLoading()
        console.log(res)
      }
    })

  }
})