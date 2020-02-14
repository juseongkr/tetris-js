class Board {
	constructor(w = CONFIG.BOARD_WIDTH, h = CONFIG.BOARD.HEIGHT) {
		this.width = w;
		this.height = h;
		this.map = this.initMap();
	}

	initMap() {
		return Array.from({length: this.height}, () => Array(this.width).fill(0));
	}

	checkPosition(x, y) {
		return 0 <= x && x < this.width && 0 <= y && y < this.height;
	}

	checkAnyFilledRow(row) {
		return this.map[row].some(x => x);
	}

	checkAllFilledRow(row) {
		return this.map[row].every(x => x);
	}

	clearLine() {
		let cleared = 0;
		this.map.forEach((row, i) => {
			if (this.checkAllFilledRow(i)) {
				this.map.splice(i, 1);
				this.map.unshift(new Array(this.width).fill(0));
				cleared++;
			}
		});
		return cleared;
	}

	draw(color) {
		this.map.forEach((row, y) => {
			row.forEach((val, x) => {
				if (val) {
					mainCanvas.drawBlock(new Point(x, y), color || CONFIG.BLOCK_COLORS[val]);
				}
			});
		});
	}
}