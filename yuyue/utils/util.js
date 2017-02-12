
function getNextDate(days) {
  var date = new Date();
  var targetDay_milliseconds = days * 24 * 60 * 60 * 1000;
  date.setTime(date.getTime() + targetDay_milliseconds);

  date = formatDate(date);
  return date;
}

function formatDate(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  var week = date.getDay();

  return {
    week: formatWeek(week),
    date: [year, month, day].map(formatNumber).join('/'),
  }
  
}

function formatNumber(n) {
  n = n.toString()
  return n[0] ? n : '0' + n;
}

function formatWeek(w) {
  var week = '';
  switch (w) {
    case 0: week = "星期日"; break;
    case 1: week = "星期一"; break;
    case 2: week = "星期二"; break;
    case 3: week = "星期三"; break;
    case 4: week = "星期四"; break;
    case 5: week = "星期五"; break;
    case 6: week = "星期六"; break;
  }

  return week;
}

// 当前向前半个月日期
function nextDatesOfHalfMonth() {
  var dates = [];
  for (var i = 1; i <= 15; i++) {
    var date = getNextDate(i);
    dates.push(date)
  }

  return dates;
}

module.exports = {
  getNextDate: getNextDate,
  nextDatesOfHalfMonth: nextDatesOfHalfMonth
}
