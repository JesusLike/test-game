class Map {
	constructor(tiles, tilesheet, spawn) {
		this.tiles = tiles;
		this.tilesheet = tilesheet;
		this.spawn = spawn;
		this.chars = [	[EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP],
						[EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP],
						[EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP],
						[EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP],
						[EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP],
						[EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP],
						[EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP],
						[EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP],
						[EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP, EMP]];
	}

	getTile(x, y) {
		let map = this;
		function leftUpCorner(x, y) {
			if (x > 0 && y > 0 && 
					[LWL, CLU, QRV, DEU].includes(map.tiles[x - 1][y]) || [UWL, CLU, QRH, DEL].includes(map.tiles[x][y - 1])) {
				return '1';
			}
			return '0';
		}

		function rightUpCorner(x, y) {
			if (x > 0 && y < map.tiles[x].length - 1 && 
					[RWL, CRU, QRV, DEU].includes(map.tiles[x - 1][y]) || [UWL, CRU, QRH, DER].includes(map.tiles[x][y + 1])) {
				return '1';
			}
			return '0';
		}

		function rightDownCorner(x, y) {
			if (x < map.tiles.length - 1 && y < map.tiles[x].length - 1 && 
					[RWL, CRD, QRV, DED].includes(map.tiles[x + 1][y]) || [DWL, CRD, QRH, DER].includes(map.tiles[x][y + 1])) {
				return '1';
			}
			return '0';
		}

		function leftDownCorner(x, y) {
			if (x < map.tiles.length - 1 && y > 0 && 
					[LWL, CLD, QRV, DED].includes(map.tiles[x + 1][y]) || [DWL, CLD, QRH, DEL].includes(map.tiles[x][y - 1])) {
				return '1';
			}
			return '0';
		}


		let corners;
		switch (map.tiles[x][y]) {
			case GRD:
				corners = leftUpCorner(x, y) + rightUpCorner(x, y) + rightDownCorner(x, y) + leftDownCorner(x, y);
				switch (corners) {
					case '0000':
						return [6, 6];
					case '1000':
						return [7, 1];
					case '0100':
						return [7, 0];
					case '0010':
						return [6, 0];
					case '0001':
						return [6, 1];
					case '1100':
						return [6, 3];
					case '1010':
						return [9, 6];
					case '1001':
						return [7, 3];
					case '0110':
						return [7, 2];
					case '0101':
						return [8, 6];
					case '0011':
						return [6, 2];
					case '1110':
						return [8, 1];
					case '1101':
						return [8, 0];
					case '1011':
						return [9, 0];
					case '0111':
						return [9, 1];
					case '1111':
						return [6, 7];
				}
			case LWL:
				corners = rightUpCorner(x, y) + rightDownCorner(x, y);
				switch (corners) {
					case '00':
						return [6, 4];
					case '10':
						return [8, 2];
					case '01':
						return [9, 2];
					case '11':
						return [5, 3];
				}
			case RWL:
				corners = leftUpCorner(x, y) + leftDownCorner(x, y);
				switch (corners) {
					case '00':
						return [6, 5];
					case '10':
						return [8, 3];
					case '01':
						return [9, 3];
					case '11':
						return [5, 4];
				}
			case UWL:
				corners = leftDownCorner(x, y) + rightDownCorner(x, y);
				switch (corners) {
					case '00':
						return [7, 4];
					case '10':
						return [8, 4];
					case '01':
						return [8, 5];
					case '11':
						return [4, 3];
				}
			case DWL:
				corners = leftUpCorner(x, y) + rightUpCorner(x, y);
				switch (corners) {
					case '00':
						return [7, 5];
					case '10':
						return [9, 4];
					case '01':
						return [9, 5];
					case '11':
						return [4, 4];
				}
			case CLU:
				corners = rightDownCorner(x, y);
				return corners == 1 ? [4, 0] : [4, 7];
			case CRU:
				corners = leftDownCorner(x, y);
				return corners == 1 ? [4, 1] : [4, 8];
			case CRD:
				corners = leftUpCorner(x, y);
				return corners == 1 ? [5, 1] : [5, 8];
			case CLD:
				corners = rightUpCorner(x, y);
				return corners == 1 ? [5, 0] : [5, 7];
			case QRH:
				return [4, 2];
			case QRV:
				return [5, 2];
			case DEL:
				return [5, 6];
			case DEU:
				return [5, 5];
			case DER:
				return [4, 5];
			case DED:
				return [4, 4];
			default:
				break;
		}
	}


	render(ctx) {
		let map = this;
		let tilesheet = new Image();
		tilesheet.src = this.tilesheet;
		tilesheet.onload = function () {
			for (let i = 0; i < map.tiles.length; i++) {
				for (let j = 0; j < map.tiles[i].length; j++) {
					if (map.tiles[i][j] != 0) {
						let tile = map.getTile(i, j);
						ctx.drawImage(tilesheet, tile[1] * tileSrcWidth, tile[0] * tileSrcHeight, tileSrcWidth, tileSrcHeight,
																				 j * tileWidth, i * tileHeight, tileWidth, tileHeight);
					}
				}
			}
		}
	}
}