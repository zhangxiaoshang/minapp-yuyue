// pages/user/user.js
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  bindFormSubmit: function(event) {
    var form = event.detail.value;
    console.log("姓名:", form.name, "性别:", form.radio, "手机:", form.phone);
    wx.navigateTo({
      url: '/pages/coach/coach'
    })
  }
})