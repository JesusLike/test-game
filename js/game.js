$("document").ready(function() {
	let canvas = document.getElementById("main-frame");
	$("body").css({"padding" : "0", "margin" : "0", "width" : window.screen.width, "height" : window.screen.height, 
		"overflow" : "hidden", "background-color" : "#000000"});
	let marginCenter = Math.floor((window.screen.height - displayHeight) / 2) + "px auto";
	let ctx = canvas.getContext("2d");
	canvas.width = displayWidth;
	canvas.height = displayHeight;

	$("canvas").css({"padding" : "0", "margin" : marginCenter, "display" : "block"});
	ctx.fillStyle = "#000000";
	ctx.fillRect(0, 0, canvas.width, canvas.height);
	
	let testLevel = getTestLevel();
	testLevel.render(ctx);
});