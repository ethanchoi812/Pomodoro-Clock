	var pomo = document.getElementById("setPomo");
	pomo.innerHTML = 25;

	var breko = document.getElementById("setBreak");
	breko.innerHTML = 05;

	var display = document.getElementById("displayTime");
	var countDown;

	var minusPomoBtn = document.getElementById("minusPomo");
	var plusPomoBtn = document.getElementById("plusPomo");

	var minusBreakBtn = document.getElementById("minusBreak");
	var plusBreakBtn = document.getElementById("plusBreak");

//click plus / minus to set time
	minusPomoBtn.onclick = function(){
		pomo.innerHTML = parseInt(pomo.innerHTML) - 1;
	}

	plusPomoBtn.onclick = function(){
		pomo.innerHTML = parseInt(pomo.innerHTML) + 1;
	}

	minusBreakBtn.onclick = function(){
		breko.innerHTML = parseInt(breko.innerHTML) - 1;
	}

	plusBreakBtn.onclick = function(){
		breko.innerHTML = parseInt(breko.innerHTML) + 1;
	}

//click number/label to set countdown
//click number to countdown

var initializeClock = function(endtime){

	var t = endtime*60 + 1; 
	
	countDown = setInterval(function(){
		t-= 1;
		var minutes = Math.floor(t/60);
		var seconds = Math.floor(t%60);

		if(minutes<10){
			display.innerHTML = "0" + minutes + ":" + seconds;
		} 

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

//change between pomodoro and break
function init(){
	pomo.onclick = function(){
		var pomoTime = pomo.innerHTML;
		clearInterval(countDown);
		initializeClock(pomoTime);
	}

	breko.onclick = function(){
		var breakTime = breko.innerHTML;
		clearInterval(countDown);
		initializeClock(breakTime);
	}
	return false;
}

window.onload = init;
