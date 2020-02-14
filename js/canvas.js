class MainCanvas {
	constructor(tag, w = CONFIG.BOARD_WIDTH, h = CONFIG.BOARD_HEIGHT, scl = CONFIG.BLOCK_SCALE) {
		this.canvas = document.getElementById(tag);
		this.ctx = this.canvas.getContext("2d");
		this.ctx.canvas.width = w * CONFIG.BLOCK_SIZE;
		this.ctx.canvas.height = h * CONFIG.BLOCK_SIZE;
		this.ctx.scale(scl, scl);
	}

	clear() {
		this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
	}

	drawBlock(pos, color, w = 1, h = 1) {
		this.ctx.save();
		let grd = this.ctx.createRadialGradient(pos.x - 0.5, pos.y - 0.5, 1, pos.x, pos.y, 2);
		grd.addColorStop(0, color);
		grd.addColorStop(0.9, "#F2F2F2");
		grd.addColorStop(1, color);
		this.ctx.fillStyle = grd;
		this.ctx.fillRect(pos.x, pos.y, w, h);
		this.ctx.restore();
	}

	drawText(msg, pos, color = CONFIG.TEXT_COLOR) {
		this.ctx.save();
		this.ctx.font = '1px Impact';
		this.ctx.fillStyle = color;
		this.ctx.fillText(msg, pos.x, pos.y, 10);
		this.ctx.restore();
	}
}