$("document").ready(function() {
	let canvas = document.getElementById("main-frame");
	let ctx = canvas.getContext("2d");
	canvas.width = displayWidth;
	canvas.height = displayHeight;
	ctx.fillStyle = "#000000";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	let tilesheet = new Image();
	tilesheet.src = pathTilesheet;
	tilesheet.onload = function () {
		for (let i = 0; i < map.length; i++) {
			for (let j = 0; j < map[i].length; j++) {
				if (map[i][j] != 0) {
					let tile = getTile(i, j);
					//console.log(i + " " + j + ": " + tile);
					ctx.drawImage(tilesheet, tile[1] * tileWidth, tile[0] * tileHeight, tileWidth, tileHeight,
																			 j * tileWidth, i * tileHeight, tileWidth, tileHeight);
				}
			}
		}
		//ctx.drawImage(tilesheet, 0, 0);
	}
});