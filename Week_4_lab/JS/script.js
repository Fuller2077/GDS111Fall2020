//JavaScript goes here

var c = document.querySelector('canvas');
var ctx = c.getContext('2d');

function draw(){

   
    
    //draw a line
    ctx.strokeStyle = 'green'
    ctx.moveTo(0,0);
    ctx.lineTo(800, 600);
    ctx.stroke();
   
    ctx.moveTo(800, 0);
    ctx.lineTo(0, 600);
    ctx.stroke();

 //draw square/box
ctx.fillStyle = 'red'
    ctx.fillRect(300,200, 200, 200)


//draw a circle

ctx.beginPath();
ctx.arc(c.width/2, c.height/2,50,0, 2*Math.PI);
ctx.stroke();
ctx.fillStyle = 'blue'
ctx.strokeStyle = 'yellow'
ctx.fill();






}
draw();