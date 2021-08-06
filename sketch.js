
var PLAY = 1;
var END = 0;
var gameState = PLAY;
var monkey , monkey_running
var banana ,bananaGroup,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =      loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
   createCanvas(600, 600);
  
  //createing monkey
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1
 
  ground = createSprite(0,350,1200,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x)
  monkey.setCollider("circle",0,-20,230);
  monkey.debug = true
  bananaGroup=new Group();
  obstacleGroup=new Group();

score=0
}
function draw() {
background(255);

  
  
  
  
 
  
  
    
  
 
  
  
    if(gameState === PLAY) {
       if (ground.x<0) {
    ground.x=500;
  }
      if(keyDown("space")) {
    monkey.velocityY = -12;
    
  }
       //move the ground
    ground.velocityX = -(4+score/100);
       score = score + Math.round(frameCount/100); 
       //add gravity
    monkey.velocityY = monkey.velocityY + 0.8
       //spawn obstacles on the ground
   banana()
    obstacles()
       if(obstacleGroup.isTouching(monkey)){
    
  
        gameState = END; 
  }
    }
    else if (gameState === END) {
        ground.velocityX = 0;
      monkey.velocityY = 0
      bananaGroup.velocityX = 0
          //set lifetime of the game objects so that they are never destroyed
    obstacleGroup.setLifetimeEach(-1);
    bananaGroup.setLifetimeEach(-1);
     
     obstacleGroup.setVelocityXEach(0);
    // bananaGroup.setVelocityXEach(0);
    }
  monkey.collide(ground);
  
  
  drawSprites();
   //displaying score
  text("Survial time: "+ score, 400,50);
}
  function banana() {
  //write code here to banana
  if (frameCount % 180 === 0) {
    var banana = createSprite(600,150,40,10);
    banana.y = Math.round(random(100,150));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     //assign lifetime to the variable
    banana.lifetime = 200;
    
    //adding banana to the group
   bananaGroup.add(banana);
    }
}

 function obstacles() {
  //write code here to obstacle
  if (frameCount % 200 === 0) {
    var obstacle = createSprite(600,150,40,10);
    obstacle.y = Math.round(random(330,330));
    obstacle.addImage(obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -3;
    
     //assign lifetime to the variable
    obstacle.lifetime = 200;
    
    //adding banana to the group
   obstacleGroup.add(obstacle);
    }
  }
  