//JavaScript goes here

var c = document.querySelector('canvas');
var ctx = c.getContext('2d');

var mario = new Image();
mario.src = 'Images/Mario3.png'
//this starts the timer for the animation
var timer = requestAnimationFrame(draw);

var x = 0;
//start and finish line for the cars
var start = 105;
var finish = 700;

//fuel values

var startFuel = randomRange(702, 100);
var fuel = startFuel;

var barFullWidth = 300;

//start timer stuff

var sec = 3;
var fps = 60;
var frames = fps;



//create instance of class

var car = new Car();
car.w = 100;
car.h = 45;
car.y = 400
car.color = "green";

var car2 = new Car();
car2.w = 75;
car2.h = 60;
car2.y = 300;


var car3 = new Car();
car3.w = 95;
car3.h = 80;
car3.y = 150;






function draw(){
    //this will call the animation again

    timer = requestAnimationFrame(draw);
    //clear the screen
    ctx.clearRect(0,0, c.width, c.height);
    

  





//draws text
ctx.lineWidth = 1;
ctx.fillStyle = 'red'
ctx.font = "50px Arial";
ctx.textAlign = "center";
ctx.fillText("Week 4 Lab", c.width/2, 50);
ctx.strokeText("Week 4 Lab", c.width/2, 50);



//drawStartLine();
drawBox('blue', start, 100, 10, 400);
//drawFinishLine(); 
//draw box with smilar code just change out the variable
drawBox('yellow', finish, 100, 10, 400);
//drawCar();
//drawSprite();
drawFuelBar();
drawFuelText();


car.x = x
car.draw();


car2.x = x;
car2.draw();

car3.x = x
car3.drawSprite();
   
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
    ctx.fillStyle = 'black';
    ctx.font = '20px Arial';
    ctx.textAlign = "center"
    ctx.fillText(sec, c.width/2, c.height/2)




}




function drawResults(){
    if(x + 100 > finish){
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.textAlign = "center"
        ctx.fillText("You Won!!! :D", c.width/2, c.height/2)

    }
    else {
        ctx.fillStyle = 'black';
        ctx.font = '20px Arial';
        ctx.textAlign = "center"
        ctx.fillText("You ran out of fuel D:<", c.width/2, c.height/2)

    }


}

function drawSprite(){
    ctx.drawImage(mario, x, 100, 100, 100);
}

function drawCar(){
    ctx.fillStyle = 'teal'
    ctx.fillRect(x, c.height/2, 100, 50);
}

function drawStartLine(){
     ctx.fillStyle = 'green';
     ctx.fillRect(start, 100, 10, 400);

}

function drawFinishLine(){
    ctx.fillStyle = 'red';
    ctx.fillRect(finish, 100, 10, 400);
}
//changes anything that calls upon drawing box, gets ride of need of function draw start and finish
function drawBox(color, x, y, w, h){
    ctx.fillStyle = color
    ctx.fillRect(x, y, w, h);

}
    



function drawFuelBar(){
    var currentBarWidth = barFullWidth * getFuelPercent();
    ctx.fillStyle = 'yellow';
    ctx.fillRect(start, 75, currentBarWidth, 20);

}
function drawFuelText(){
    ctx.fillStyle = 'black';
    ctx.font = '30px Arial';
    ctx.fillText(fuel.toFixed(0), start, 45);

}

function getFuelPercent(){
    return fuel/startFuel;
}