
var path, pathImage;
var boy, boy_running, edges, boy_collide; 
function preload(){
  //pre-load images
  pathImage = loadImage("path.png")
  boy_running = loadImage("Runner-1.png","Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage = ("path", pathImage);
  path.velocityY = -4;
  path.scale = 1.2;
  if (path.y < 400)
  {
    path.y = height/2;
  }
  
  boy = createSprite(50,160,20,50);
  boy.addAnimation("running",boy_running);
  edges = createEdgeSprites();
  
  boy.scale = 0.1;
}

function draw() {
  background(0);
  if(keyDown("right"))
  {
    boy.velocityX = -3;
  }
  if(keyDown("left"))
  {
    boy.velocityX = 3;
  }
  drawSprites();

}
