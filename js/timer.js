let seconds = 0, minutes = 0, hours = 0;

timerAdd = () => {
	seconds++;
	if (seconds >= 60) {
		minutes++;
		seconds = 0;
		if (minutes >= 60) {
			hours++;
			minutes = 0;
		}
	}

	mainTimer.textContent = hours.toString().padStart(2, "0") + ":" + 
							minutes.toString().padStart(2, "0") + ":" +
							seconds.toString().padStart(2, "0");

	timerStart();
}

timerStart = () => {
	timer = setTimeout(timerAdd, 1000);
}

timerClear = () => {
	mainTimer.textContent = "00:00:00";
	timerStop();
	seconds = 0;
	minutes = 0;
	hours = 0;
}

timerStop = () => {
	clearTimeout(timer);
}