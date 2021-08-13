var soldier;
var enemy;

var soldier1_img;

var backimg;
var bg;

var soldier1;

var bact;

var shootingsold;
var bullet;



var bulletimg;
var ground;

var bulletsGroup;

var virusGroup;

var crouchingimg;

var score = 0;

var dimg;

 var  gameover;

 var PLAY=1;
 var gameState=PLAY;


var END=0;


var overimg;




function preload(){

  bact=loadImage("images/bact1.png");

dimg=loadImage("images/d1.png");


  overimg=loadImage("images/game over.jpg");

   shootingsold=loadImage("images/shooting.png");

   bulletimg=loadImage("images/bullet.png");

  soldier1=loadImage("images/standing.png");

  crouchingimg=loadImage("images/c4.png");

 soldier1_img=loadAnimation("images/1.png","images/2.png");
 
backimg=loadImage("images/backgroundimg.jpg");
 
 

}

function setup() {
  createCanvas(2600, 1800);


  bg=createSprite(900,250,2600,400);
bg.addImage("background",backimg);
bg.scale=2;
bg.velocityX=-6
bg.x=bg.width/2;


gameover=createSprite(645,300,50,50);
gameover.addImage("gameover",overimg);
gameover.scale=1.5;
gameover.visible=false;

ground=createSprite(700,570,2000,20);
ground.visible=false;

bulletsGroup=createGroup();
virusGroup=createGroup();

soldier=createSprite(100,500,10,10);
soldier.addImage("soldier",soldier1);
soldier.scale=0.3;

}
 


function draw() {


  createEdgeSprites();
  soldier.collide(ground);

if(keyDown("r")){
  gameState=PLAY;
}

  if(gameState===PLAY){

  
    if(bg.x<0){
      bg.x= bg.width/2;
    }
    

    
if(virusGroup.isTouching(soldier)){

  gameState = END;
 
 }

  if(keyDown("RIGHT_ARROW")){
    

    soldier.addAnimation("soldier",soldier1_img);
    soldier.velocityX=0;
      }
    
      if(keyDown("DOWN_ARROW")){
        
        
        soldier.addImage("soldier",crouchingimg);
        soldier.scale=0.3;
        soldier.velocityX=0;
        
    
      }
      if(keyDown("s")){
        
        
        soldier.addImage("soldier",shootingsold);
        soldier.velocityX=0;
        
    
        createBullet();
        bullet.x=soldier.x+80;


      }
    
    if(bulletsGroup.isTouching(virusGroup)){
      virusGroup.destroyEach();
      bulletsGroup.destroyEach();
      score=score+1;
    }
    
  if(keyDown(UP_ARROW)&& soldier.y>257){
    soldier.velocityY=-10;
  soldier.addImage("soldier",soldier1)
    }

  

 
  
  soldier.velocityY= soldier.velocityY+0.8;
  
  createVirus();
  }
  
 else if(gameState===END){

  soldier.addImage("soldier",dimg);
  soldier.scale=1.5;
 soldier.y=500;
 gameover.visible=true;

bg.velocityX=0;

virusGroup.destroyEach();


 soldier.velocityX=0;
 soldier.velocityY=0;
  gameover.visible=true;

}
  drawSprites();


  text("Score:"+score ,900,30);



   }


function createBullet(){


  bullet=createSprite(140,454,10,10);
  bullet.addImage("bullet",bulletimg);
  bullet.scale=0.3;
  bullet.velocityX=5;


bullet.y=soldier.y-26;  

  bullet.x=soldier.x+80;


  bulletsGroup.add(bullet);
}
function createVirus(){
  if(World.frameCount%200===0){
    bacti=createSprite(900,450,10,10);
    bacti.addImage("bacti",bact);
    bacti.scale=0.1
    bacti.velocityX=-5;

  virusGroup.add(bacti);
  }
}



