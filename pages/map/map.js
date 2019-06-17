// pages/map/map.js
Page({

  data: {
    longitude: '113.324520',// 	中心经度
    latitude: '23.099994',//中心纬度
    scale: 18,// 缩放级别，取值范围为5-18
    // 标记点用于在地图上显示标记的位置
    markers: [{
      id: 0,//	标记点id
      iconPath: '/images/location.png',//显示的图标,项目目录下的图片路径
      // title: '腾讯微信总部',
      longitude: 113.324520,//经度
      latitude: 23.099994,//纬度
      width: 50,// 标注图标宽度
      height: 50// 标注图标高度
    }],
    polyline: [], // 指定一系列坐标点，从数组第一项连线至最后一项
    polygons: [], // 指定一系列坐标点，根据 points 坐标数据生成闭合多边形
    circles: [], // 在地图上显示圆
    "include-points": [],//缩放视野以包含所有给定的坐标点
    'show-location': true,// 显示带有方向的当前定位点
  }
})