//Array of words
var rps = [];
rps[0] = `Rock` 
rps[1] = `Paper`
rps[2] = `Scissors`

//Array of Buttons
var btn = document.querySelectorAll(`a`)
//Changes the words in the buttons
btn[0].innerHTML = rps[0]
btn[1].innerHTML = rps[1]
btn[2].innerHTML = rps[2]

var c=document.getElementById('myCanvas');
var ctx=c.getContext('2d');





//Makes the buttons clickable.
//Once clicked they call the play function
btn[0].addEventListener(`click`, function(e){
    play(0)
})
btn[1].addEventListener(`click`, function(e){
    play(1)
})
btn[2].addEventListener(`click`, function(e){
    play(2)
})

//Play function accepts an integer
//generates an integer 0-2
//Displays the player's choice and computer's choice





function play(pChoice)
{
    var cChoice = Math.floor(Math.random()*2.999999)
    ctx.clearRect(0,0, 1000, 600);


                ctx.lineWidth = 1;
                ctx.fillStyle = 'Black'
                ctx.font = "50px Concert One";
                ctx.textAlign = "center";
                ctx.fillText(("Player:" + rps[pChoice] + "  Computer:" + rps[cChoice]) , c.width/2, 200, )


    switch(pChoice){
        case 0:
            if(cChoice === 0)
            {
                //display a tie
                ctx.lineWidth = 1;
                ctx.fillStyle = 'Black'
                ctx.font = "50px Concert One";
                ctx.textAlign = "center";
                ctx.fillText("You Tied!!", c.width/2, c.height/2);
                

            }
            else if(cChoice === 1)
            {
                //display a loss
                ctx.lineWidth = 1;
                ctx.fillStyle = 'Black'
                ctx.font = "50px Concert One";
                ctx.textAlign = "center";
                ctx.fillText("You Lost!!", c.width/2, c.height/2);
                
            }
            else
            {
                //display a win
                ctx.lineWidth = 1;
                ctx.fillStyle = 'Black'
                ctx.font = "50px Concert One";
                ctx.textAlign = "center";
                ctx.fillText("You Won!!", c.width/2, c.height/2);
                
            }
            break;

            case 1:
                if(cChoice === 0)
                {
                    //display a tie
                    ctx.lineWidth = 1;
                    ctx.fillStyle = 'Black'
                    ctx.font = "50px Concert One";
                    ctx.textAlign = "center";
                    ctx.fillText("You Won!!", c.width/2, c.height/2);
                }
                else if(cChoice === 1)
                {
                    //display a loss
                    ctx.lineWidth = 1;
                    ctx.fillStyle = 'Black'
                    ctx.font = "50px Concert One";
                    ctx.textAlign = "center";
                    ctx.fillText("You Tied!!", c.width/2, c.height/2);
                }
                else
                {
                    //display a win
                    ctx.lineWidth = 1;
                    ctx.fillStyle = 'Black'
                    ctx.font = "50px Concert One";
                    ctx.textAlign = "center";
                    ctx.fillText("You Lost!!", c.width/2, c.height/2);
                } 
            break;

            case 2:
                if(cChoice === 0)
                {
                    //display a tie
                    ctx.lineWidth = 1;
                    ctx.fillStyle = 'Black'
                    ctx.font = "50px Concert One";
                    ctx.textAlign = "center";
                    ctx.fillText("You Lost!!", c.width/2, c.height/2);
                }
                else if(cChoice === 1)
                {
                    //display a loss
                    ctx.lineWidth = 1;
                    ctx.fillStyle = 'Black'
                    ctx.font = "50px Concert One";
                    ctx.textAlign = "center";
                    ctx.fillText("You Won!!", c.width/2, c.height/2);
                }
                else
                {
                    //display a win
                    ctx.lineWidth = 1;
                    ctx.fillStyle = 'Black'
                    ctx.font = "50px Concert One";
                    ctx.textAlign = "center";
                    ctx.fillText("You Tied!!", c.width/2, c.height/2);
                }
             break;
    }
}
