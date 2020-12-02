window.onload = function(){
var c = document.querySelector("canvas");
var ctx = c.getContext("2d");



var rock = new Image();
var paper = new Image();
var scissor = new Image();
var hrock = new Image();
var hpaper = new Image();
var hscissor = new Image();

rock.src = "images/bananap.jpg";
paper.src = "images/monkeyp.jpg";
scissor.src = "images/gunp.jpg";

hrock.src = "images/bananap2.jpg";
hpaper.src = "images/monkeyp2.jpg";
hscissor.src = "images/gunp2.jpg";

hscissor.onload = function(){
    draw(rock, paper,scissor, rock, paper,scissor);
}

var results = "Pick an option from the buttons above."

var rps = {
    Win : null, wins : 0, 
    Lose: null, loses : 0, 
    Draw : null, draws : 0, 
}


var rps = [];
rps[0] = "Rock";
rps[1] = "Paper";
rps[2] = "Scissors";

//Array of Buttons
var btn = document.querySelectorAll('a');
//assign event listeners to the buttons
btn[0].addEventListener('click', function(e){play(0)});
btn[1].addEventListener('click', function(e){play(1)});
btn[2].addEventListener('click', function(e){play(2)});

function play(playersChoice){
    var cpuChoice = Math.floor(Math.random() * 2.999);
   // alert("Player Choice: " + rps[playersChoice] + " vs. Computer Choice: " + rps[cpuChoice]);

    switch(playersChoice){

    

        case 0:
            if(cpuChoice === 0){ 
                //alert("It's a tie!");
                results = "Its a tie!";
                draw(hrock,paper,scissor,hrock,paper,scissor);
                
            }
            else if(cpuChoice === 1){
                //alert("You Lost!");
                results = "You Lost!";
                draw(hrock,paper,scissor,rock,hpaper,scissor);
                
            } 
            else{
                //alert("You Win!");
                results = "You Win";
                draw(hrock,paper,scissor,rock,paper,hscissor);
                
            }
            break;
        case 1:
            if(cpuChoice === 0){
               // alert("You Win!");
                results = "You Win!";
                draw(rock,hpaper,scissor,hrock,paper,scissor);
            }
            else if(cpuChoice === 1){
                //alert("It's a tie!");
                results = "It's a tie!";
                draw(rock,hpaper,scissor,rock,hpaper,scissor);
            } 
            else{
                //alert("You Lost!");
                results = "You Lost!";
                draw(rock,hpaper,scissor,rock,paper,hscissor);

            } 
            break;
        case 2: 
            if(cpuChoice === 0){
                //alert("You Lose!");
                results = "You Lost!";
                draw(rock,paper,hscissor,hrock,paper,scissor);
            }
            else if(cpuChoice === 1){
                //alert("You Win!");
                results = "You Win!";
                draw(rock,paper,hscissor,rock,hpaper,scissor);
            } 
            else{
                //alert("It's a tie!");
                results = "It's a tie!";
                draw(rock,paper,hscissor,rock,paper,hscissor);
            }
            break;
    }
}

function draw(rock, paper, scissor, crock, cpaper, cscissor){
    ctx.clearRect(0,0,c.width,c.height);
    ctx.fillRect(0,0,c.width,c.height);

    ctx.save();
    ctx.font = "30px Arial";
    ctx.textAlign = "center";
    ctx.fillStyle = "white";
    ctx.fillText("Player Choice", c.width/2, 100);
    ctx.drawImage(rock, c.width/2 - rock.width/2 -100, 150);
    ctx.drawImage(paper, c.width/2 - paper.width/2, 150);
    ctx.drawImage(scissor, c.width/2 - scissor.width/2 + 100, 150);

    ctx.fillText("Computer Choice", c.width/2, 325);
    ctx.drawImage(crock, c.width/2 - rock.width/2 - 100, 375);
    ctx.drawImage(cpaper, c.width/2 - paper.width/2, 375);
    ctx.drawImage(cscissor, c.width/2 - scissor.width/2 + 100, 375);
    //displays results
    ctx.fillText(results, c.width/2, 525);    

    ctx.restore();
}

}