// pages/input/input.js
Page({
  data: {
    showTopTips: false,
    NAME:"", // 表单单选
    TEXTAREA:'', // 文本域
    date: "2016-09-01",//日期
    time: "12:01",// 时间

    countryCodes: ["+86", "+80", "+84", "+87"],//选择号码

    countryCodeIndex: 0,// 国家区号

    accounts: ["微信号", "QQ", "Email"],// 微信号数据
    accountIndex: 0,//微信号改变

    countries: ["中国", "美国", "英国"],// 国家地区数据
    countryIndex: 0,//国家地区改变
    isAgree: false // 同意条款

  },
  onLoad(options){
    var url = "uploadUrl"
    console.log(require("../../config.js")[url] )
  },
  // 获取输入框的值
  bindGetName(e){
    console.log(e.detail.value)
  },
  // 日期改变
  bindDateChange: function (e) {
    this.setData({date: e.detail.value})
  },
  // 时间改变
  bindTimeChange: function (e) {
    this.setData({time: e.detail.value})
  },
  
  // 国家区号改变
  bindCountryCodeChange: function (e) {
    console.log('picker country code 发生选择改变，携带值为', e.detail.value);
    this.setData({countryCodeIndex: e.detail.value})
  },
  // 微信号改变
  bindAccountChange: function (e) {
    console.log('picker account 发生选择改变，携带值为', e.detail.value);
    this.setData({accountIndex: e.detail.value})
  },
  // 国家/地区改变
  bindCountryChange: function (e) {
    console.log('picker country 发生选择改变，携带值为', e.detail.value);
    this.setData({ countryIndex: e.detail.value })
  },
  bindAgreeChange: function (e) {
    this.setData({isAgree: !!e.detail.value.length});
  },
  // 错误提醒，直接调用该方法
  showTopTips(){
    this.setData({ showTopTips: true })
    setTimeout(() =>{
      this.setData({showTopTips: false})
    }, 3000);
  }
  
})