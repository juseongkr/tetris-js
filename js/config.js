const CONFIG = { 
	BOARD_WIDTH: 10,
	BOARD_HEIGHT: 20,
	BLOCK_SIZE: 30,
	BLOCK_SCALE: 30,
	GAME_SPEED: 1000,

	SHADOW_COLOR: "#E0E0E0",
	TEXT_COLOR: "#CC0000",
	BLOCK_COLORS: ["", "#55358A", "#4B4453", "#FF8561", "#005945", "#A93B88", "#005A8C", "#872114"],

	KEY: {
		LEFT: 37,
		UP: 38,
		RIGHT: 39,
		DOWN: 40,
		ESC: 27,
		SPACE: 32,
	},

	BLOCK_TYPES: [
		[],

		[[1, 1],
		[1, 1]],

		[[0, 2, 0],
		[2, 2, 2],
		[0, 0, 0]],

		[[3, 3, 0],
		[0, 3, 3],
		[0, 0, 0]],

		[[0, 4, 4],
		[4, 4, 0],
		[0, 0, 0]],

		[[5, 0, 0],
		[5, 5, 5],
		[0, 0, 0]],

		[[0, 0, 6],
		[6, 6, 6],
		[0, 0, 0]],

		[[0, 0, 0, 0],
		[7, 7, 7, 7],
		[0, 0, 0, 0],
		[0, 0, 0, 0]],
	],
};

let frame = {
	start: 0,
	elapsed: 0,
	speed: CONFIG.GAME_SPEED,
};