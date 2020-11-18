var fixedRect, movingRect;
var car,wall;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;
  car = createSprite(5,200,35,35);
  car.shapeColor="red";
  car.velocityX=5;

 wall=createSprite(600,200,70,60);
 wall.shapeColor="blue";
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
IsTouching(car,wall);
  Collide(car,wall);
 BounceOff(car,wall);
 if(Collide(car,wall)){
  textSize(30);
  fill("purple"); 
  text("collided!",600,400);
   car.shapeColor="white";
 }
  drawSprites();
}
