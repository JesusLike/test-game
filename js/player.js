class Character {
	constructor(name, hp, sprite) {
		this.name = name;
		this.hp = hp;
		this.x = -1;
		this.y = -1;
		this.sprite = sprite;
		this.rotation = rotRight;
	}

	isPassable(x, y, map) {
		if (impassable.includes(map.tiles[x][y]) || map.chars[x][y] != 0) {
			return false;
		}
		return true;
	}

	move(dir) {
		if (isPassable(this.x + dir[0], this.y + dir[1], map)) {
			this.x += dir[0];
			this.y += dir[1];
		}
	}

	spawn(x, y) {
		this.x = x;
		this.y = y;
	}

	render(ctx) {
		let xTile = this.x * tileWidth + tileWidth / 2;
		let yTile = this.y * tileHeight + tileHeight / 2;

		ctx.translate(xTile, yTile);
		ctx.rotate(this.rotation);
		ctx.drawImage(this.sprite, -tileWidth / 2, -tileHeight / 2, tileWidth, tileHeight);
		ctx.rotate(-this.rotation);
		ctx.translate(-xTile, -yTile);
	}
}

class Player extends Character {
	constructor(name, hp) {
		super(name, hp, "./assets/characters.png");
	}
}