// pages/template/template.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    setMealData: [{ id: "0", name: '', price: '' }],//当前套餐数据
    templateData: [1],//套餐模板数据
    num: 1,//套餐个数
  },
  onLoad:function(){
    
  },
  bindSetMealName(e){
    console.log(e.currentTarget.id, typeof e.currentTarget.id )
    if (!this.data.setMealData[e.currentTarget.id]){
      this.data.setMealData.push({ name: e.detail.value})
    }else{
      this.data.setMealData[e.currentTarget.id].name = e.detail.value
    }
    console.log(this.data.setMealData)
  },
  bindSetMealPrice(e){
    if (!this.data.setMealData[e.currentTarget.id]) {
      this.data.setMealData.push({ price: e.detail.value })
    } else {
      this.data.setMealData[e.currentTarget.id].price = e.detail.value
    }
    console.log(this.data.setMealData)
  },
  bindAddSetMeal: function(e){
    this.data.num++
    this.data.templateData.push(this.data.num)
    this.setData({
      num: this.data.num,
      templateData: this.data.templateData
    })
    // console.log(this.data.num)
    // console.log(this.data.templateData)
  },
  submitForm(){
    console.log(this.data.setMealData)
    
    return
    wx.showLoading({ title: '加载中' })
    wx.request({
      url: require('../../config.js').index,
      data: this.data.setMealData,
      header: { 'content-type': 'application/x-www-form-urlencoded' },
      method: 'POST',
      dataType: 'json',
      success:(res)=>{
        wx.hideLoading()
        console.log(res)
      }
    })
  }
})