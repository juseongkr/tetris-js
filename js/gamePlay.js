class GamePlay {
	constructor() {
		this.board = new Board(CONFIG.BOARD_WIDTH, CONFIG.BOARD_HEIGHT);
		this.block = this.generateRandomBlock();
		this.next = [this.generateRandomBlock()];
		this.score = 0;
	}

	generateRandomBlock(min = 1, max = 8) {
		let rand = Math.floor(Math.random() * (max - min) + min);
		return new Block(new Point(this.board.width/2-1, 0), rand, rand);
	}

	checkBlockCollision(block, x, y) {
		for (let i=0; i<block.width; ++i) {
			for (let j=0; j<block.height; ++j) {
				let ny = block.pos.y + y + i;
				let nx = block.pos.x + x + j;
				if (block.type[i][j] && (!this.board.checkPosition(nx, ny) || this.board.map[ny][nx])) {
					return false;
				}
			}
		}
		return true;
	}

	moveBlock(x, y) {
		if (this.checkBlockCollision(this.block, x, y)) {
			this.block.pos.x += x;
			this.block.pos.y += y;
			return true;
		}
		return false;
	}

	getDropPosition() {
		let block = JSON.parse(JSON.stringify(this.block));
		Object.setPrototypeOf(block, Block.prototype);

		while (this.checkBlockCollision(block, 0, 1)) {
			block.pos.y += 1;
		}
		return block;
	}

	rotateBlock() {
		let newBlock = JSON.parse(JSON.stringify(this.block));
		Object.setPrototypeOf(newBlock, Block.prototype);
		newBlock.type = Array.from({length: this.block.width}, () => Array(this.block.height).fill(0));

		newBlock.type.forEach((row, x) => {
			row.forEach((val, y) => {
				newBlock.type[x][y] = this.block.type[y][x];
			});
		});
		newBlock.type.forEach(row => row.reverse());

		let possible = this.checkBlockCollision(newBlock, 0, 0);
		if (possible) {
			this.block = newBlock;
		}
		return possible;
	}

	freezeBlock() {
		this.block.type.forEach((row, y) => {
			row.forEach((val, x) => {
				if (val) {
					this.board.map[this.block.pos.y + y][this.block.pos.x + x] = val;
				}
			});
		});
	}

	checkGameOver() {
		return this.board.checkAnyFilledRow(0);
	}

	updateScore(point) {
		if (point) {
			this.score += Math.ceil((Math.pow(2, point+1) * 100000) / frame.speed);
			frame.speed -= 10;
		}
	}

	getScore() {
		return this.score.toString().padStart(8, '0');
	}

	update() {
		let move = this.moveBlock(0, 1);
		if (!move) {
			this.freezeBlock();
			let cleared = this.board.clearLine();
			this.updateScore(cleared);
			mainScore.textContent = this.getScore();
			let block = this.generateRandomBlock()
			while (this.next[this.next.length-1].color == block.color) {
				block = this.generateRandomBlock();
			}
			this.next.push(block);
			this.block = this.next.shift();
		}
	}

	draw() {
		mainCanvas.clear();
		nextCanvas.clear();
		this.board.draw();
		this.getDropPosition().draw(CONFIG.SHADOW_COLOR);
		this.block.draw();
		this.next[0].drawNext();
	}
}