//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: '欢迎使用预约小程序',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '/pages/user/user'
    })
  },
  onLoad: function () {
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
      console.log("微信用户名:", userInfo.nickName);
    })
  }
})