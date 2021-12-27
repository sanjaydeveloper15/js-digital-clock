
function getTime(){
	var date = new Date(),
		h = date.getHours(),
		m = date.getMinutes(),
		s = date.getSeconds(),
		h = (h<10) ? `0${h}` : h,
		m = (m<10) ? `0${m}` : m,
		s = (s<10) ? `0${s}` : s,
		datetime = `${h}:${m}:${s}`;
	$("#app h2").html(datetime);
}

setInterval(function(){
	getTime();
},1000)