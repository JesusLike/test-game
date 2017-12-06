function leftUpCorner(x, y) {
	if (x > 0 && y > 0 && 
			[LWL, CLU, QRV].includes(map[x - 1][y]) || [UWL, CLU, QRH].includes(map[x][y - 1])) {
		return '1';
	}
	return '0';
}

function rightUpCorner(x, y) {
	if (x > 0 && y < map[x].length - 1 && 
			[RWL, CRU, QRV].includes(map[x - 1][y]) || [UWL, CRU, QRH].includes(map[x][y + 1])) {
		return '1';
	}
	return '0';
}

function rightDownCorner(x, y) {
	if (x < map.length - 1 && y < map[x].length - 1 && 
			[RWL, CRD, QRV].includes(map[x + 1][y]) || [DWL, CRD, QRH].includes(map[x][y + 1])) {
		return '1';
	}
	return '0';
}

function leftDownCorner(x, y) {
	if (x < map.length - 1 && y > 0 && 
			[LWL, CLD, QRV].includes(map[x + 1][y]) || [DWL, CLD, QRH].includes(map[x][y - 1])) {
		return '1';
	}
	return '0';
}

function getTile(x, y) {
	let corners;
	switch (map[x][y]) {
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
		default:
			break;
	}
}
