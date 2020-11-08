var fixedbox,movingbox,object1,object2,object3,object4

function setup() {
  createCanvas(400,400);
  fixedbox = createSprite(200,200,40,40)
  movingbox = createSprite(200,50,40,40)
  object1 = createSprite(200,100,40,40)
  object2= createSprite(100,100,40,40)
  object3 = createSprite(50,50,40,40)
  object4 = createSprite(300,200,40,40)
  movingbox.shapeColor="green"
  fixedbox.shapeColor="blue"
  object1.shapeColor="yellow"
  object2.shapeColor="orange"
  object3.shapeColor="violet"
  object4.shapeColor="pink"
  object2.velocityX=3
}

function draw() {
  background(255,255,255);  
  drawSprites();
  movingbox.y=World.mouseY
  movingbox.x=World.mouseX

  bounceOff(object2,object1)

  if(collision(movingbox,object4)){
    object4.shapeColor="red"
    movingbox.shapeColor="red"
  }
  else{
    movingbox.shapeColor="green"
    object4.shapeColor="blue"
  }

}

function bounceOff (sprite1,sprite2){
  if(sprite1.x-sprite2.x < sprite1.width/2 + sprite2.width/2 &&
  sprite2.x-sprite1.x < sprite2.width/2+sprite1.width/2){
  sprite1.velocityX = sprite1.velocityX * (-1)
  }

 if(sprite2.y-sprite1.y < sprite2.height/2 + sprite1.height/2 &&
  sprite1.y-sprite2.y < sprite1.height/2+sprite2.height/2){
  sprite1.velocityY = sprite1.velocityY * (-1)
}

}

function collision(sprite1,sprite2){
  if(sprite1.x-sprite2.x < sprite1.width/2+sprite2.width/2 && 
    sprite2.x-sprite1.x < sprite1.width/2+sprite2.width/2 &&
    sprite1.y-sprite2.y < sprite2.height/2+sprite1.height/2 &&
    sprite2.y-sprite1.y < sprite1.height/2+sprite2.height/2){
    return true;
  }
  else{
   return false;
  }
}