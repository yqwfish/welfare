/** 
	*获取当前时间
	三个参数各不为null时，各显示年月日，时分秒，星期几
*/
{
	function getCurrentDate(ymd, hms, day) {
		var now = new Date();
		var time = "";
		if (ymd != null){//精确到天
			var year = now.getFullYear(); //得到年份
			var month = now.getMonth();//得到月份
			month = month + 1;
			var date = now.getDate();//得到日期
			if (month < 10) month = "0" + month;
			if (date < 10) date = "0" + date;
			time = (time!="" ? time+" " : time) + year + "/" + month + "/" + date;
		}
		if (hms != null) {//精确到时分秒
			var hour = now.getHours();//得到小时
			var minu = now.getMinutes();//得到分钟
			var sec = now.getSeconds();//得到秒
			if (hour < 10) hour = "0" + hour;
			if (minu < 10) minu = "0" + minu;
			if (sec < 10) sec = "0" + sec;
			time = (time!="" ? time+" " : time) + hour + ":" + minu + ":" + sec;
		}
		if (day != null) {//获取星期几
			time = time!="" ? time+" " : time;
			var day = now.getDay();//得到周几
			switch(day) {
				case 0: time = time + "星期日"; break;
				case 1: time = time + "星期一"; break;
				case 2: time = time + "星期二"; break;
				case 3: time = time + "星期三"; break;
				case 4: time = time + "星期四"; break;
				case 5: time = time + "星期五"; break;
				case 6: time = time + "星期六"; break;
				default: time = time + day;
			}
		}
		return time;
	}
	//测试用
	//alert(getCurrentDate(1,null,null));
}