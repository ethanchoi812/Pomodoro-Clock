//set default pomo and break time limit
	var pomo = document.getElementById("setPomo");
	pomo.innerHTML = "25";

	var breko = document.getElementById("setBreak");
	breko.innerHTML = "5";

//click plus / minus to set time

	var minusPomoBtn = document.getElementById("minusPomo");
	var plusPomoBtn = document.getElementById("plusPomo");

	var minusBreakBtn = document.getElementById("minusBreak");
	var plusBreakBtn = document.getElementById("plusBreak");


	minusPomoBtn.onclick = function(){
		pomo.innerHTML = parseInt(pomo.innerHTML) - 1;
		if(pomo.innerHTML<1){
			pomo.innerHTML = "1";
		}
	}

	plusPomoBtn.onclick = function(){
		pomo.innerHTML = parseInt(pomo.innerHTML) + 1;
	}

	minusBreakBtn.onclick = function(){
		breko.innerHTML = parseInt(breko.innerHTML) - 1;
		if(breko.innerHTML<1){
			breko.innerHTML = "1";
		}
	}

	plusBreakBtn.onclick = function(){
		breko.innerHTML = parseInt(breko.innerHTML) + 1;
	}

//click number/label to set countdown

	var displayTime = document.getElementById("displayTime");
	var countDown;

var initializeClock = function(endtime){

	var t = endtime*60 + 1; 
	
	function updateClock(){
		t-= 1;
		var minutes = Math.floor(t/60);
		var seconds = Math.floor(t%60);

		if(minutes<10){
			displayTime.innerHTML = "0" + minutes + ":" + seconds;
		} 

		if(seconds<10){
			displayTime.innerHTML = minutes + ":" + "0" + seconds;
		} else {
			displayTime.innerHTML = minutes + ":" + seconds;
			}

		if(t<1){
			clearInterval(countDown);
			document.getElementById("gong").play();
			displayTime.innerHTML = "TIME'S UP";
			}
	}

	updateClock();
	countDown = setInterval(updateClock, 1000);
}


//change between pomodoro and break
var displayholder;

function init(){
	pomo.onclick = function(){
		displayholder = pomo.innerHTML;
		displayTime.innerHTML = displayholder + ":00";
		clearInterval(countDown);
	}

	breko.onclick = function(){
		displayholder = breko.innerHTML;
		displayTime.innerHTML = displayholder + ":00";
		clearInterval(countDown);
	}

	displayTime.onclick = function(){
		clearInterval(countDown);
		initializeClock(displayholder);
		}	
	return false;
}

//click number to countdown
window.onload = init;
