window.onload = function(){
    //your code goes here


    var c =document.querySelector('canvas');
    var ctx = c.getContext("2d");
    var timer = requestAnimationFrame(draw);
    var deg = 45;
    var x = 0
    //create a ARRAY [] of rotating boxes
    var rotatingBoxes = []
    var count = 12

    //this is our game object class that we will use to draw our shapes
    function GameObject(){
        this.x = 0
        this.y = 0
        this.w = 100
        this.h = this.w
        this.deg = 0
        this.vx = 1
        this.vy = 1
        this.color = `rgb(${Math.random()*255},${Math.random()*255},${Math.random()*255})`;

            this.drawBox = function(){
                ctx.save();
                ctx.fillStyle = this.color;
                ctx.fillRect( this.x, this.y, this.w, this.h);
                ctx.restore();
            }

            this.drawRotateBox = function(){
                ctx.save();
                ctx.fillStyle = this.color;
                ctx.translate(this.x, this.y);
                ctx.rotate(this.deg += this.vx * Math.PI/180)//converts degrees to radians, degrees * Math.PI/180 and rotates box
                ctx.fillRect(0 - this.w/2, 0 - this.h/2, this.w, this.h);
                ctx.restore()
            }
    }


    //create instance(s) of game object(s)

    var box = new GameObject();
    box.x = 0
    box.y = 300


    var rotatingBox = new GameObject();
    rotatingBox.x = 300
    rotatingBox.y = 300

    //for loop of instances
    for(var i = 0; i < count; i++){
        rotatingBoxes[i] = new GameObject();
        rotatingBoxes[i].x = Math.floor(Math.random() * c.width);
        rotatingBoxes[i].y = Math.floor(Math.random() * c.height);
        

        
    }



    //This is where we will draw stuff
    function draw(){
        /*
        ctx.fillStyle = "Blue";
       
        ctx.save();//saves the canvas state and the changes above it
        
        ctx.translate(c.width/2, c.height/2);//changed the state of the canvas 
        
        ctx.rotate(deg+=1 * Math.PI/180)//converts degrees to radians, degrees * Math.PI/180
        
        ctx.fillRect( 0-100, 0-100, 200, 200);
        
        ctx.restore();//changed the canvas state back to default
        
         ctx.fillRect(x+=1, 100, 20, 20);//draw second square
        */
        ctx.clearRect(0, 0, c.width, c.height)//clears the canvas

        box.x += box.vx;

        box.drawBox();

        rotatingBox.drawRotateBox();
        //draws all the rotatring boxes
        for(var i=0; i<rotatingBoxes.length; i++){
            rotatingBoxes[i].drawRotateBox();
        }

        timer = requestAnimationFrame(draw);
    }

    draw();













}