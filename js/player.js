class Character {
	constructor(id, name, hp, sprite, x, y) {
		this.id = id;
		this.name = name;
		this.hp = hp;
		this.x = x;
		this.y = y;
		this.sprite = new Image();
		this.sprite.src = sprite;
		this.rotation = rotDown;
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

	render(ctx) {
		let char = this;

		let xTile = char.x * tileWidth + tileWidth / 2;
		let yTile = char.y * tileHeight + tileHeight / 2;

		//char.sprite.onload = function() {
		ctx.translate(xTile, yTile);
		ctx.rotate(char.rotation);
		ctx.drawImage(char.sprite, -tileWidth / 2, -tileHeight / 2, tileWidth, tileHeight);
		ctx.rotate(-char.rotation);
		ctx.translate(-xTile, -yTile);
		//}
	}
}

class Player extends Character {
	constructor(id, name, hp, x, y) {
		super(id, name, hp, "./assets/characters.png", x, y);
	}
}