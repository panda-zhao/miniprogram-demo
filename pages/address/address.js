// pages/address/address.js
Page({

  data: {

  },


  onLoad: function (options) {

  },
  // 1 打开地图选择位置返回位置信息。
  chooseAddress() {
    wx.chooseLocation({
      success: (res) => {
        // console.log(res.name)// 位置名称-"广州市天河区委(天府路西)"
        // console.log(res.address)// 详细地址-"广东省广州市天河区天府路1号"
        // console.log(res.latitude)// 纬度，浮点数，范围为-90~90，负数表示南纬。使用 gcj02 国测局坐标系，值23.12463
        // console.log(res.longitude)// 经度，浮点数，范围为-180~180，负数表示西经。使用 gcj02 国测局坐标系，值 113.36199
        this.setData({
          name: res.name,
          address: res.address,
          latitude: res.latitude,
          longitude: res.longitude
        })
      }
    })
  },

  // 使用微信内置地图查看位置
  openLocation(){
    // 获取当前位置
    wx.getLocation({
      type: 'gcj02', // wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标	
      // altitude: false,// 传入 true 会返回高度信息，由于获取高度需要较高精确度，会减慢接口返回速度
      
      success(res) {
        console.log(res)
        // 根据当前位置在微信内置地图查看
        wx.openLocation({
          latitude: "23.12463", // 纬度
          longitude: "113.36199",// 经度
          scale: 18 ,// 缩放比例，范围5~18
          name: '广州市天河区委(天府路西)',//位置名
          address: '广东省广州市天河区天府路1号'//地址的详细说明

        })
      }
    })
  },

  
  

})