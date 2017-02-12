var localbase_data = require("../../data/coaches-data.js");

// pages/coach/coach.js
Page({
  data: {},
  onLoad: function (options) {
    this.setData({
      coachList: localbase_data.coachList
    })
  },
  // 选中教练
  onCoachTap: function (event) {
    var id = event.currentTarget.dataset.id;
    console.log("预约教练:", this.data.coachList[id].name);
    wx.navigateTo({
      url: "/pages/reservation/reservation?id=" + id
    })
  }

})