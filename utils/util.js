const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
/**
 * 选择图片
 * 参数
 * length 最多可选择的图片张数,最小1
 * callback 回调函数参数：图片的暂存路径，类型：数组
 */
const chooseImage = (length, callback) => {
  wx.chooseImage({
    count: length,// 最多可以选择的图片张数
    sizeType: ['original', 'compressed'],// 所选的图片的尺寸,原图original,压缩图compressed
    sourceType: ['album', 'camera'],//选择图片的来源.	从相册选图album,	使用相机camera
    success: (res) => {
      const tempFilePaths = res.tempFilePaths// 图片的暂存路径，类型：数组
      // console.log('【选择图片】返回暂存路径-数组', tempFilePaths)
      callback(tempFilePaths)
    }
  })
}

/**
 *  开始上传文件 
 * 参数： url 上传的图片服务器地址 https://gagent2.icpisp.com/upload
 * 参数1 图片暂存路径，类型：数组
 * 参数2 回调函数参数：图片的网络路径，类型字符串
 */
const upload = (tempFilePaths, callback) => {
  for (var temPath of tempFilePaths) {

    const uploadTask = wx.uploadFile({
      url: require('../config.js').uploadUrl,// *必填项，开发者服务器地址
      filePath: temPath,// *必填项，要上传文件资源的路径
      name: 'files',// *必填项，文件对应的 key，开发者在服务端可以通过这个 key 获取文件的二进制内容
      success: (res) => {
        var data = JSON.parse(res.data)// 上传成功后返回的文件对象
        // console.log('【上传图片】返回网络路径-数组', data)
        var path = 'https://gagent2.icpisp.com/upload/' + data[0].filename
        callback(path)//回调的参数是上传成功图片的网络路径
      },
      fail: (res) => {
        console.log('上传失败！', res);
      }
    })
    /* 注意如果多图时上传进度效果体验很差！*/
    uploadTask.onProgressUpdate((res) => {
      // console.log('上传进度', res.progress)
      // console.log(res)
      wx.showLoading({ title: '上传中 ' + res.progress + '%' })
      if (res.progress == '100') {
        wx.hideLoading()
      }
    })
  }

}

/**
 * post请求接口
 * 请求方法 util.postRequest(url,params,callback)
 * 参数： 请求路径，请求参数，回调函数
 */
const postRequest = (url,params,callback) => {
  wx.request({
    url: require("../../config.js")[url],//请求路径
    data: params,// 请求参数
    header: { 'content-type': 'application/x-www-form-urlencoded' },// 表单提交方式
    method: 'POST',// 请求方式
    dataType: 'json',// 返回的数据格式
    responseType: 'text',//响应的数据类型
    success: function (res) { callback(res) }, //接口调用成功的回调函数
    // 接口调用失败的回调函数
    fail: function (res) { 
      wx.showModal({
        content: '请求服务器出错，请求路径' + require("../../config.js")[url] ,
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            // console.log('用户点击确定')
            console.log('错误信息',res)
          }
        }
      });
    },
    complete: function(res) {},
  })
} 



module.exports = {
  formatTime: formatTime,
  postRequest: postRequest,
  chooseImage: chooseImage,
  upload: upload
}