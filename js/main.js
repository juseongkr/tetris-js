let mainCanvas = new MainCanvas("main_board");
let nextCanvas = new MainCanvas("main_next", 10, 10, 60);
let mainTimer = document.getElementById("main_timer");
let mainScore = document.getElementById("main_score");
let game, timer, reqId, stop;

addKeyboard();
var gameStart = () => {
	game = new GamePlay(CONFIG.BOARD_WIDTH, CONFIG.BOARD_HEIGHT);
	gameClear();
	timerClear();
	timerStart();
	cancelAnimationFrame(reqId);
	animation();
}

var animation = (now = 0) => {
	frame.elapsed = now - frame.start;
	if (frame.elapsed > frame.speed) {
		frame.start = now;
		game.update();
		if (game.checkGameOver()) {
			gameOver();
			return;
		}
	}
	game.draw();
	reqId = requestAnimationFrame(animation);
}

var gamePause = () => {
	if (stop) {
		stop = !stop;
		timerStart();
		animation();
	} else {
		stop = !stop;
		timerStop();
		mainCanvas.drawText("PAUSED", new Point(3, 7));
		cancelAnimationFrame(reqId);
	}
}

var gameOver = () => {
	timerStop();
	mainCanvas.drawText("GAME OVER", new Point(3, 7));
}

var gameClear = (speed = CONFIG.GAME_SPEED) => {
	stop = false;
	frame.start = 0;
	frame.elapsed = 0;
	frame.speed = speed;
}