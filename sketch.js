var  tenniscourt, tenniscourtImage;
var net, netImage; 
var robot, robotImage; 
var tennisracket, tennisracketImage;
var ball, ballImage;
var robotScore = 0;
var tennisRacketScore = 0;
function preload(){
  tenniscourtImage = loadImage("tennisCourt.png");
  netImage = loadImage("tennis net.png");
  robotImage = loadImage("robot.png");
  tennisracketImage = loadImage("tennis racket.png");
  ballImage = loadImage("ball.png")
}

function setup() {
  createCanvas(2000,700);
  tenniscourt = createSprite(695, 267, 960, 960);
  tenniscourt.addImage(tenniscourtImage); 
  tenniscourt.scale = 2;

  net = createSprite(700, 210, 10, 10);
  net.addImage(netImage); 
  net.scale = 0.6; 

  tennisracket = createSprite(698, 500, 10, 10);
  tennisracket.addImage(tennisracketImage);
  tennisracket.scale = 0.6; 

  robot = createSprite(700, 80, 10, 10);
  robot.addImage(robotImage);
  robot.scale = 0.13;

  ball = createSprite(700, 200, 80, 80);
  ball.addImage(ballImage);
  ball.scale = 0.1; 

  boundary1 = createSprite(470, 267, 6, 854);
  boundary1.visible = false; 
  boundary2 = createSprite(916, 267, 6, 854);
  boundary2.visible = false; 
  boundary3 = createSprite(780, 10, 1800, 6);
  boundary3.visible = false; 
  boundary4 = createSprite(330, 700, 1810, 6);
  boundary4.visible = false; 



}

function draw() { 
  background("pink");
  
    tennisracket.x = World.mouseX;
    robot.x = ball.x; 
 
  ball.bounceOff(boundary1);
  ball.bounceOff(boundary2);
  
  
  //ball.bounceOff(boundary3);
  //ball.bounceOff(boundary4);
  if(ball.isTouching(boundary4)||ball.isTouching(boundary3)){
    ball.velocityX=0
    ball.velocityY = 0
    ball.x = 700
    ball.y = 200
  }
  ball.bounceOff(tennisracket);
  ball.bounceOff(robot);
  tennisracket.collide(boundary1);
  tennisracket.collide(boundary2);
  tennisracket.collide(boundary3);
  tennisracket.collide(boundary4);
  
  
  
  
  //if(ball.isTouching(boundary4){

  //}
    text("Robot Score:", 927, 50);
    text(robotScore, 1000, 50);
    text("TennisRacket Score:", 927, 78)
    text(tennisRacketScore, 1040, 78);
  
  
  
  if (robotScore === 5 || tennisRacketScore === 5){
   gameState = "over";
  text("Game Over!",170,160);
    

}
if (robotScore === 5 || tennisRacketScore === 5){
  text("Game Over!",170,160);
  text("Press 'R' to Restart",150,180);
}

if (keyDown("r") && gameState === "over") {
  robotScore = 0;
  tennisRacketScore = 0;
}


  

  drawSprites();
}

function keyPressed(){
  if(keyCode===32){
    ball.velocityY = 6;
    ball.velocityX = 2;
  }
}

