var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d")

//Square
ctx.fillStyle = "Yellow"
ctx.fillRect(85, 301, 100, 102);
ctx.strokeStyle = 'black';
ctx.lineWidth = 5;
ctx.strokeRect(85, 301, 100, 102);

//Circle
ctx.beginPath();
        ctx.arc(385, 441, 67, 0, Math.PI*2);
        ctx.fillStyle = "#ffff00";
        ctx.fill();
        ctx.lineWidth = 5
        ctx.strokeStyle = 'red';
        ctx.stroke();

//Line
ctx.translate (80, 382)
ctx.moveTo(198,166);
ctx.lineTo(5,300);
ctx.lineWidth = 5
ctx.strokeStyle = 'rgb(255, 0, 0)'
ctx.stroke();

//Pentagon
var numberOfSides = 5;
var radius=100;
var x = 558;
var y = -13;
var angle = 2*Math.PI/numberOfSides;
ctx.beginPath();
ctx.translate(x, y);
ctx.moveTo (radius*Math.cos(0), radius*Math.sin(0));          
for (var i = 1; i <= numberOfSides; i++) {
	 ctx.lineTo (radius*Math.cos(i * angle), radius*Math.sin(i * angle));
}
ctx.fillStyle = '#ff00ff';
ctx.fill();
ctx.strokeStyle = '#00ffff'
ctx.lineWidth = 5
ctx.stroke();

//star
ctx.fillStyle = "blue";
        ctx.translate(-110, 118)
         ctx.beginPath();
         ctx.moveTo(108, 8);
         ctx.lineTo(143, 67);
         ctx.lineTo(218, 78.3);
         ctx.lineTo(162, 131);
         ctx.lineTo(175, 205);
         ctx.lineTo(108, 170);
         ctx.lineTo(41.2, 205);
         ctx.lineTo(55, 131);
         ctx.lineTo(1, 78);
         ctx.lineTo(75, 68);
         ctx.lineTo(107, 8);
         ctx.closePath();
         ctx.fillStyle = '#ffff00';
         ctx.strokeStyle = 'rgb(32, 32, 32)';
         ctx.stroke();
         ctx.lineWidth = 5;
         ctx.fill();     


