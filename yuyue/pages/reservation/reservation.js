var coaches = require('../../data/coaches-data.js');
var utils = require('../../utils/util.js');
// pages/reservation/reservation.js
Page({
  data: {
    am1BackGround: '',
    am2BackGround: '',
    pm1BackGround: '',
    pm2BackGround: '',
    slot: '',
    time: '',
    week: '',
    date: '',
    coach: {},
    dates: []
  },
  onLoad: function (options) {
    var id = options.id;
    var coach = coaches.coachList[id];
    var dates = utils.nextDatesOfHalfMonth();
    this.setData({
      coach: coach,
      dates: dates
    })

  },
  onDateTap: function (event) {
    var that = this;
    var dates = this.data.dates;
    var idx = event.currentTarget.dataset.idx;
    this.data.week = event.currentTarget.dataset.week;
    this.data.date = event.currentTarget.dataset.date;
    dates.map((date, index) => {
      if (index === idx) {
        date.chosed = !date.chosed;
      } else {
        date.chosed = false;
      }
    })
    this.setData({
      dates: that.data.dates
    })
  },

  onTimeTap: function (event) {
    this.data.slot = event.currentTarget.dataset.slot;
    this.data.time = event.currentTarget.dataset.time;
    this.setTimeBackground(this.data.time);
  },
  onButtonTap: function (event) {
    var data = this.data;
    console.log("预约时间:", data.date + ' ' + data.week + ' ' + this.data.slot + ":", this.data.time);
    wx.showToast({
      title: "预约成功",
      icon: "success"
    })
  },
  setTimeBackground: function (time) {
    switch (time) {
      case '08:00-10:00':
        this.setData({
          am1BackGround: 'background-color: #d1d1d1',
          am2BackGround: '',
          pm1BackGround: '',
          pm2BackGround: '',
        })
        break;
      case '10:00-12:00':
        this.setData({
          am1BackGround: '',
          am2BackGround: 'background-color: #d1d1d1',
          pm1BackGround: '',
          pm2BackGround: '',
        })
        break;
      case '14:00-16:00':
        this.setData({
          am1BackGround: '',
          am2BackGround: '',
          pm1BackGround: 'background-color: #d1d1d1',
          pm2BackGround: '',
        })
        break;
      case '16:00-18:00':
        this.setData({
          am1BackGround: '',
          am2BackGround: '',
          pm1BackGround: '',
          pm2BackGround: 'background-color: #d1d1d1',
        })
        break;
    }
  }
})