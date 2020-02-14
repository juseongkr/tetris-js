var addKeyboard = () => {
	document.addEventListener("keydown", event => {
		event.preventDefault();
		if (!stop && event.keyCode === CONFIG.KEY.UP) {
			game.rotateBlock();
		} else if (!stop && event.keyCode === CONFIG.KEY.RIGHT) {
			game.moveBlock(1, 0)
		} else if (!stop && event.keyCode === CONFIG.KEY.LEFT) {
			game.moveBlock(-1, 0)
		} else if (!stop && event.keyCode === CONFIG.KEY.DOWN) {
			game.moveBlock(0, 1)
		} else if (!stop && event.keyCode === CONFIG.KEY.SPACE) {
			while (game.moveBlock(0, 1)) {
				frame.start = 0;
			}
		} else if (event.keyCode === CONFIG.KEY.ESC) {
			gamePause();
		}
	});
};