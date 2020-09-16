
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
createCanvas(400,400)  
  
ground = createSprite(400,370,800,60)
ground.velocityX = -11
  



monkey = createSprite(100,340)
monkey.addAnimation("bj",monkey_running)
monkey.scale = (0.1)
monkey.setCollider("rectangle",0,0,400,monkey.height)
monkey.debug = false
  

}


function draw() {
  background("lightblue")
 
  stroke("black")
  textSize(20)
  fill("black")
  score = Math.ceil(frameCount/frameRate())
  text("Survival Time:"+ score,100,50)
  
  
  
  if(keyDown("space") && monkey.y >= 300   ){
   monkey.velocityY = -14
  }
 
  monkey.velocityY = monkey.velocityY + 0.8
  monkey.collide(ground)
  ground.x = ground.width/2
  
  drawSprites();
  spawnObstacles();
  spawnBanana();
}

function spawnObstacles(){
  if(frameCount%300 === 0){
    obstacle = createSprite(400, 315)
    obstacle.addImage(obstacleImage)
    obstacle.velocityX = -11
    obstacle.lifetime = 400
    obstacle.scale = 0.2
      obstacleGroup = createGroup();
 if(monkey.isTouching(obstacleGroup)){
 reset();
  }
  }
  
  
}
function spawnBanana(){
 if(frameCount%80 === 0){
  banana = createSprite(400, 120) 
  banana.y = Math.round(random(120,200))
  banana.addImage(bananaImage)
  banana.scale = 0.1
  banana.lifetime = 400
  banana.velocityX = -11
   bananaGroup = createGroup();
 if(monkey.isTouching(bananaGroup)){
   bananaGroup.destroyEach(); 
  }
  bananaGroup.add(banana)
  
 }
}

function reset(){
 obstacleGroup.setVelocityXEach(0) 
 bananaGroup.setVelocityXEach(0) 
  score = 0
}






