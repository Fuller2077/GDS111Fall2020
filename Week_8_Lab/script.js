var c = document.querySelector('canvas')
var context = c.getContext('2d')
var timer = requestAnimationFrame(main)
var gravity = 1;
var asteroids = new Array();
var numAsteroids = 10;
var gameOver = true;
var score = 0;
var gameStates = [];
var currentState = 0;
var ship;;
var highScore = 0;
var mainBGImage = new Image;
mainBGImage.src = "images/Rock1.kpg.jpg";
var aSprite = new Image
aSprite.src = "images/Meteor.png";

//on load event that listens for when the image is loaded
mainBGImage.onload = function(){
    main();
}

aSprite.onload = function(){
    main();
}



function randomRange(high, low){
    return Math.random() * (high - low) + low;
}

//class for the asteroids
function Asteroid(){
    this.radius = randomRange(10, 2);
    this.x = randomRange(c.width - this.radius, 0 + this.radius);
    this.y = randomRange(c.height - this.radius, 0 + this.radius) - c.height;
    this.vx = randomRange(-5, -10);
    this.vy = randomRange(10, 5);
    this.color = "grey"

    this.draw = function(){
        context.save();
        context.beginPath();
        context.fillStyle = this.color;
        //context.arc(this.x, this.y, this.radius, 0, 2 * Math.PI, true);
        context.drawImage(aSprite, this.x - this.radius, this.y - this.radius, this.radius * 2, this.radius * 2);
        context.closePath();
        context.fill();
        context.restore();
    }
}
function gameStart(){
         //for loop to create the instances of the asteroids
    for(var i = 0; i<numAsteroids; i++){
    asteroids[i] = new Asteroid();
    }
    //create the instance of the ship for the game
     ship = new PlayerShip();
}



//class for the spaceship
function PlayerShip(){
    this.x = c.width/2;
    this.y = c.height/2;
    this.w = 20;
    this.h = 20;
    this.vx = 0;
    this.vy = 0;
    this.up = false;
    this.down = false;
    this.left = false;
    this.right = false;
    this.flamelength = 30


    this.draw = function(){
        context.save();
                context.translate(this.x, this.y);
            //draws the flame
            if(this.up == true){
                context.save();
                //adjust the flame length to flicker
                if(this.flamelength == 30){
                    this.flamelength = 10;
                }
                else{
                    this.flamelength = 30;
                }
                context.fillStyle = "orange";
                context.beginPath();
                context.moveTo(0, this.flamelength);
                context.lineTo(5, 5);
                context.lineTo(-5, 5);
                context.lineTo(0, this.flamelength);
                context.closePath();
                context.fill();
                context.restore();
            }
            //creates the trianlge
                context.beginPath();
                context.fillStyle = "white";
                context.moveTo(0, -13);
                context.lineTo(10, 10);
                context.lineTo(-10, 10);
                context.lineTo(0, -13);
                context.closePath();
                context.fill();
            

        context.restore();
    }

    this.move = function(){
        this.x += this.vx;
        this.y += this.vy;
        //adds a boundry that the player cannot cross, keeps player in screen
        if(this.y > c.height - 20){
            this.y = c.height - 20;
            this.vy = 0
        }
        if(this.y < 0 + 13){
            this.y = 13;
            this.vy = 0
        }
        //creates boundry for right side
        if(this.x > c.width - 10){
            this.x = c.width - 10;
            this.vx = 0
        }
        //left side boundry
        if(this.x < 0 + 10)
            this.x = 10;
            this.vx = 0
    }

}




document.addEventListener('keydown', KeyPressDown);
document.addEventListener('keyup', keyPressUp);


function KeyPressDown(e){
    //console.log("Key Down" + e.keyCode);
    if(gameOver == false){
    if(e.keyCode === 38){
        
        ship.up = true
        }
    if(e.keyCode === 37){
        ship.left = true;
        }

    if(e.keyCode === 39){
        ship.right = true;
        }
    }

    if(gameOver == true){
        if(e.keyCode === 13){
            

        if(currentState == 2){
            currentState = 0
            score = 0
            numAsteroids = 10
            asteroids = []
            gameStart();
            main();
            
            
        }
        else{
            gameStart();
            gameOver = false
            currentState = 1
            main();
            scoreTimer();
        }
        
        
        }
    }   
}


function keyPressUp(e){
    //console.log("Key Up" + e.keyCode);
    if(gameOver == false){
        if(e.keyCode === 38){
        ship.up = false
        }
        if(e.keyCode === 37){
        ship.left = false;
        }

        if(e.keyCode === 39){
        ship.right = false;
        }

    }
        
 
}

//game states for menus and gameplay
    gameStates[0] = function(){
    context.save()
    context.drawImage(mainBGImage, 0,0, c.width, c.height)
    context.font = "30px arial";
    context.fillStyle = "white"
    context.textAlign = "center"
    context.fillText("Asteroid Avoider", c.width/2, c.height/2 - 30);
    context.font = "15px arial"
    context.fillText("Press Enter to Start", c.width/2, c.height/2 + 20);

    context.restore()
}

    gameStates[1] = function(){
    //gamecode from the main function

    //display the score
    context.save();
    context.font = "15px Arial";
    context.fillStyle = 'white';
    context.fillText('Score: ' + score.toString(), c.width - 150, 30)
    context.restore();

    //ship.vy += gravity;

    if(ship.up == true){
        ship.vy = -10;
    }
    else{
        ship.vy= 3;
    }

    if(ship.left == true){
        ship.vx = -4;
    }
    

    else if(ship.right == true){
        ship.vx = 4;
    }
    else{
        ship.vx = 0;
    }

    for(var i = 0; i<asteroids.length; i++){
        //using the disatnce formula to find the distance between ship and asteroid
            var dx = ship.x - asteroids[i].x;
            var dy = ship.y - asteroids[i].y;
            var dist = Math.sqrt((dx*dx)+(dy*dy));
        
            //checks for collision with asteroid and stops game
        if(detectCollision(dist, (ship.h/2 + asteroids[i].radius))){
            //console.log('We collided with Asteroid' + i)
            gameOver = true;
            currentState = 2

            //document.removeEventListener('keydown', KeyPressDown);
            //document.removeEventListener('keyup', keyPressUp);

        }

        //checks to see if asteroid is off the screen
        if(asteroids[i].y> c.height + asteroids[i].radius){
        //reset asteroids position off the screen
            asteroids[i].y = randomRange(c.height - asteroids[i].radius, 0 + asteroids[i].radius) - c.height;
            asteroids[i].x = randomRange(c.width - asteroids[i].radius, 0 + asteroids[i].radius);
        }
        if(gameOver == false){
            asteroids[i].y += asteroids[i].vy;
         }
        asteroids[i].draw();
    }

   


    ship.draw();
    if(gameOver == false){
    ship.move();
    }

    while(asteroids.length < numAsteroids){
        asteroids.push(new Asteroid());
    }
}

gameStates[2] = function(){
    if(score > highScore){
        //sets the highscore
        highScore = score;
        context.save()
        context.font = "30px arial";
        context.fillStyle = "white"
        context.textAlign = "center"
        context.fillText("Game Over! Your score was: " + score.toString(), c.width/2, c.height/2 - 60);
        context.fillText("Your New Highscore: " + highScore.toString(), c.width/2, c.height/2 - 30);
        context.fillText("New Record!" , c.width/2, c.height/2);
        context.font = "15px arial"
        context.fillText("Press Enter to Play Again", c.width/2, c.height/2 + 20);
        context.restore()
    }

    else{
        context.save()
        context.font = "30px arial";
        context.fillStyle = "white"
        context.textAlign = "center"
        context.fillText("Game Over! Your score was: " + score.toString(), c.width/2, c.height/2 - 60);
        context.fillText("Your Highscore: " + highScore.toString(), c.width/2, c.height/2 - 30);
        context.font = "15px arial"
        context.fillText("Press Enter to Play Again", c.width/2, c.height/2 + 20);
        context.restore()
    }
 

}

function main(){
    context.clearRect(0, 0, c.width, c.height);

       //this is where our original game code was
        if(gameOver == false){
            timer = requestAnimationFrame(main);
    }
    
        gameStates[currentState]();
}


function scoreTimer(){
    if(gameOver == false){
        score++;
        
        if(score % 5 == 0){
            numAsteroids += 5;
            console.log(numAsteroids);
        }
        
        setTimeout(scoreTimer,1000);
    }

    
}
//scoreTimer();



function detectCollision(distance, calcDistance){
        return distance < calcDistance;




}