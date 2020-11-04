//JavaScript goes here

var c = document.querySelector('canvas');
var ctx = c.getContext('2d');

var Player_1 = new Image();
Player_1.src = 'Images/Player_1.png'

var Player2 = new Image();
Player2.src = 'Images/Player2.png'


//this starts the timer for the animation
var timer = requestAnimationFrame(draw);

var x = 0;
//start and finish line for the cars
var start = 58;
var finish = 956;

//fuel values

var startFuel = 930;
var fuel = startFuel;

var barFullWidth = 512;

var drawFuelBarBackgroundwidth = 512;

//start timer stuff

var sec = 3;
var fps = 60;
var frames = fps;



function draw(){
    //this will call the animation again

    timer = requestAnimationFrame(draw);
    //clear the screen
    ctx.clearRect(0,0, c.width, c.height);
    

  





//draws text
ctx.lineWidth = 1;
ctx.fillStyle = 'White'
ctx.font = "50px Monda";
ctx.textAlign = "center";
ctx.fillText("Start Your Engines!!", c.width/2, 50);
ctx.strokeText("Start Your Engines!!", c.width/2, 50);



drawStartLine();
drawFinishLine();
drawSprite2();
drawSprite();
drawFuelBarBackground();
drawFuelBar();
drawFuelText();

   
//updating the x

    if(sec > 0){
        runStartTimer();
        drawStartTimer();
    }

    else{
         if(fuel > 0){
        x += 1;
        fuel -= 1;
         }

     }
   
//checks to see when we run out of fuel or pass finish line
    if (fuel <= 0 || x + 100 > finish){
        drawResults()

    }




}



function runStartTimer(){
    frames -= 1;
    
    if(frames < 0){
        frames = fps;
        sec -= 1;
    }
    

}

function drawStartTimer(){
    ctx.fillStyle = 'white';
    ctx.font = '20 px Monda';
    ctx.textAlign = "center"
    ctx.fillText(sec, c.width/2, c.height/2)




}




function drawResults(){
    if(x + 100 > finish){
        ctx.fillStyle = 'white';
        ctx.font = '20px Monda';
        ctx.textAlign = "center"
        ctx.fillText("You Made it Home!", c.width/2, c.height/2)

    }
    else {
        ctx.fillStyle = 'white';
        ctx.font = '20px Monda';
        ctx.textAlign = "center"
        ctx.fillText("Your Lost In Space! Try Again??", c.width/2, c.height/2)

    }


}

function drawSprite(){
    ctx.drawImage(Player_1, x, 100, 100, 200);
}

function drawSprite2(){
    ctx.drawImage(Player2, x, 350, 100, 100);
    
}

function drawStartLine(){
    ctx.fillStyle = 'white';
    ctx.fillRect(start, 100, 10, 800)

}

function drawFinishLine(){
    ctx.fillStyle = 'black';
    ctx.fillRect(finish, 100, 10, 800)
}

function drawFuelBarBackground(){
    ctx.fillStyle = 'black'
    ctx.fillRect(start, 75, drawFuelBarBackgroundwidth, 20);
}

function drawFuelBar(){
    var currentBarWidth = barFullWidth * getFuelPercent();
    ctx.fillStyle = 'Yellow';
    ctx.fillRect(start, 75, currentBarWidth, 20);
    

}

function drawFuelText(){
    ctx.fillStyle = 'Yellow';
    ctx.font = '30px Monda';
    ctx.fillText(fuel.toFixed(0), 80, 45);

}

function getFuelPercent(){
    return fuel/startFuel;
}