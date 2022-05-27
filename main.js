canvas = document.getElementById('myCanvas');
ctx = canvas.getContext("2d");
var images=["mars.jpg","mars1.jpeg","mars2.jpeg","mars3.jpeg", "mars4.jpeg"];
var ranNumber=Math.floor(Math.random()*5);

//Define the width & height of the rover image.
var width=100;
var height=80;


background_image = images[ranNumber];

rover_image = "rover.png";

rover_x = 10;
rover_y = 10;

//Create "add()" function
 function add(){
     background_imgtag=new Image();
     background_imgtag.onload=uploadBackground;
     background_imgtag.src=background_image;


     rover_imgtag=new Image();
     rover_imgtag.onload=uploadRover;
     rover_imgtag.src=rover_image;
 }

//Create "uploadBackground()" function.
function uploadBackground(){
    ctx.drawImage(background_imgtag,0,0,canvas.width,canvas.height);
}                           
 
function uploadRover(){
    ctx.drawImage(rover_imgtag,rover_x,rover_y,width,height);
}


window.addEventListener("keydown",my_keydown);
function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
    //Write code if keypressed is up. ASCII value of "up" arrow is 38.
	if(keyPressed=="38"){
        up();
    }	
    


     //Write code if keypressed is down. ASCII value of "up" arrow is 40.
	if(keyPressed=="40"){
        down();
    }	
    if(keyPressed=="37"){
        left();
    }   
     if(keyPressed=="39"){
        right();
     }


    //Additional Activity
    //Write the code for left and right arrow pressed. 
}

function up(){
    if(rover_y>=0){
        rover_y=rover_y-10;
        uploadBackground();
        uploadRover();
    }
}
function down(){
	if(rover_y<=500){
        rover_y=rover_y+10;
        uploadBackground();
        uploadRover();
    }
}
function right(){
	if(rover_x<=700){
        rover_x=rover_x+10;
        uploadBackground();
        uploadRover();
    }
}
function left(){
	if(rover_x>=0){
        rover_x=rover_x-10;
        uploadBackground();
        uploadRover();
    }
}



