class Block {
	constructor(pos, type, color) {
		this.pos = pos;
		this.type = CONFIG.BLOCK_TYPES[type];
		this.color = CONFIG.BLOCK_COLORS[color];
		this.width = CONFIG.BLOCK_TYPES[type][0].length;
		this.height = CONFIG.BLOCK_TYPES[type].length;
	}

	draw(shadow) {
		this.type.forEach((row, y) => {
			row.forEach((val, x) => {
				if (val > 0) {
					mainCanvas.drawBlock(new Point(this.pos.x + x, this.pos.y + y), shadow || this.color);
				}
			});
		});
	}

	drawNext(offset = 1) {
		this.type.forEach((row, y) => {
			row.forEach((val, x) => {
				if (val > 0) {
					nextCanvas.drawBlock(new Point(x + offset , y + offset), this.color);
				}
			});
		});
	}

};