	var pomo = document.getElementById("setPomo");
	var pomoTime = pomo.innerHTML;

	var breko = document.getElementById("setBreak");
	var breakTime = breko.innerHTML;

	var display = document.getElementById("displayTimer");

var initializeClock = function(endtime){

	var t = endtime*60;
	var countDown = setInterval(function(){

		t--;
		var minutes = Math.floor(t/60);
		var seconds = Math.floor(t%60);

		if(seconds<10){
			display.innerHTML = minutes + ":" + "0" + seconds;
		} else {
			display.innerHTML = minutes + ":" + seconds;
			}

		if(t<1){
			clearInterval(countDown);
			display.innerHTML = "TIME'S UP";
			}

	}, 1000);
}

function init(){
	pomo.onclick = function(){
		display.innerHTML = "";
		initializeClock(pomoTime);
	}

	breko.onclick = function(){
		display.innerHTML = "";
		initializeClock(breakTime);
	}
	return false;
}

window.onload = init;
