var setTime = document.getElementById("setPomo").innerHTML;
var t = setTime*60;

var countDown = setInterval(function(){

	if(t<1){
		clearInterval(countDown);
		document.getElementById("displayTimer").innerHTML = "TIME'S UP"
	}else{
		t--;
		var minutes = Math.floor(t/60);
		var seconds = Math.floor(t%60);

	if(seconds<10){
		document.getElementById("displayTimer").innerHTML = minutes + ":" + "0" + seconds;
	} else {
		document.getElementById("displayTimer").innerHTML = minutes + ":" + seconds;
		}
	}
}, 1000);