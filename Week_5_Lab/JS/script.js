//JavaScript goes here

var c = document.querySelector('canvas');
var ctx = c.getContext('2d');

var mario = new Image();
mario.src = 'Images/Mario3.png'
//this starts the timer for the animation
var timer = requestAnimationFrame(draw);

var x = 0;

function draw(){
    //this will call the animation again

    timer = requestAnimationFrame(draw);
    //clear the screen
    ctx.clearRect(0,0, c.width, c.height);
    x++;

    //conditional element
    if(x > c.width){
        x = -200;


    }

    //draw everything to the screen
    
    /*
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
ctx.fillStyle = 'blue'
ctx.strokeStyle = 'yellow'
ctx.stroke();
ctx.fill();
*/
//draws mario

ctx.drawImage(mario, x, 100, 200, 200);

//draws text
ctx.lineWidth = 1;
ctx.fillStyle = 'red'
ctx.font = "50px Arial";
ctx.textAlign = "center";
ctx.fillText("Week 4 Lab", c.width/2, 50);
ctx.strokeText("Week 4 Lab", c.width/2, 50);

console.log("We are animating");




}
draw();