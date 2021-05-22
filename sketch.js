var  balloon , bg , backgroundImage1
var database, position
// create database and position variable here

function preload(){
   bg =loadImage("cityImage.png");
   balloonImage1=loadAnimation("hotairballoon1.png", "hotairballoon2.png","hotairballoon3.png");
}

//Function to set initial environment
function setup() {
  database=firebase.database();
  createCanvas(500,500);

  balloon=createSprite(250,450,150,150);
  balloon.addAnimation("balloon",balloonImage1);
  balloon.scale=0.5;

 // textSize(20); 
 // var balloonPosition = database.ref('balloon/position');
  //balloonPosition.on("value",readHeight,showError);
}

// function to display UI
function draw() {
  background(bg);

  if(keyDown(LEFT_ARROW)){
    balloon.x= balloon.x-10
  }
  else if(keyDown(RIGHT_ARROW)){
    balloon.x = balloon.x+10
  }
  else if(keyDown(UP_ARROW)){
    balloon.y=balloon.y-10
  }
  else if(keyDown(DOWN_ARROW)){
    balloon.y= balloon.y+10
  }
  drawSprites();
}