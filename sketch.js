const Engine = Matter.Engine;
const World = Matter.World;
const Events = Matter.Events;
const Bodies = Matter.Bodies;

var jungleGIF;
var monster1, monster1A;
var monster2, monster2A;
var monster3, monster3A;
var monster4, monster4A;

var alien, alienA;

var bomb, bombA;
var ghost, ghostA;
var polarbear, polarbearA;
var scorpion, scorpionA;
var shark, sharkA;
var snowleopard, snowleopardA;
var tiger, tigerA;

function preload() {
  monster1A=loadAnimation("1monster1.png","1monster2.png");
  monster2A=loadAnimation("2monster1.png","2monster2.png");
  monster3A=loadAnimation("3monster1.png","3monster2.png");
  monster4A=loadAnimation("4monster1.png","4monster2.png");

  bombA=loadAnimation("bomb1.png","bomb2.png","bomb3.png");
  ghostA=loadAnimation("ghost1.png","ghost2.png");
  polarbearA=loadAnimation("polarbear1.png","polarbear2.png","polarbear3.png","polarbear4.png");
  scorpionA=loadAnimation("scorpion1.png","scorpion2.png");
  sharkA=loadAnimation("shark1.png","shark2.png");
  snowleopardA=loadAnimation("snowleopard1.png","snowleopard2.png","snowleopard3.png","snowleopard4.png","snowleopard5.png");
  tigerA=loadAnimation("tiger1.png","tiger2.png","tiger3.png","tiger4.png","tiger5.png","tiger6.png");
}

function setup() {
  createCanvas(800, 800);
  monster2 = createSprite(50,600,30,30);
  monster2.velocityX=3;
  //monster1.addAnimation("monster",monster1A);

  ghost = createSprite(50,200,25,40);
  ghost.velocityX=6;
  ghost.velocityY=6;

  tiger = createSprite(100,600,30,30);
  alien = createSprite(200,600,30,30);
  

  monster1 = createSprite(150,600,30,30);

  engine = Engine.create();
  world = engine.world;
} 
function draw() {
  background("white");
  edges=createEdgeSprites();
 //text("Score : "+score,20,30);

  ghost.bounceOff(edges);
  if(keyWentDown(RIGHT_ARROW)){
    alien.velocityX=2;
  }
  if(keyWentUp(RIGHT_ARROW)){
    alien.velocityX=0;
  }

  if(keyWentDown(LEFT_ARROW)){
    alien.velocityX=-2;    
  }
  if(keyWentUp(LEFT_ARROW)){
    alien.velocityX=0;    
  }
  Engine.update(engine);  
  drawSprites();
}