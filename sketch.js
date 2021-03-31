var player,playerWalking;
var backGround,backGroundImg;
var spell;
var spellimg
var playerdead;

var gamestate = 0 ;
var spellgroup;

function preload(){
  playerWalking = loadAnimation("Wraith_01_Moving Forward_000.png","Wraith_01_Moving Forward_001.png","Wraith_01_Moving Forward_002.png","Wraith_01_Moving Forward_003.png","Wraith_01_Moving Forward_004.png","Wraith_01_Moving Forward_005.png","Wraith_01_Moving Forward_006.png","Wraith_01_Moving Forward_007.png","Wraith_01_Moving Forward_008.png","Wraith_01_Moving Forward_009.png","Wraith_01_Moving Forward_010.png","Wraith_01_Moving Forward_011.png");
  playerdead= loadAnimation('Wraith_01_Moving Forward_000.png');
  backGroundImg = loadImage("image.png");
  spellimg = loadImage("Spells Effect.png")

}

function setup() {
 createCanvas(600,600);
  
   backGround = createSprite(-300,300,50,50);
  backGround.addImage("backGroundImg",backGroundImg);

  
  
  player = createSprite(-1788,300,50,50);
  player.addAnimation("playerWalking",playerWalking);
  player.scale = 0.5;
  spellgroup = new Group();
  // camera.position.x = -800;
  player.setCollider("rectangle",0,0,130,300);
  // player.debug = true;
}

function draw() {
  background("white");
  drawSprites();

  // backGround.velocity.x = -1;
  
  camera.position.x = player.x+100;
  camera.position.y  = player.y;

  if(gamestate === 0){
if(player.x<1188){
  if(keyDown("right_arrow")){
    player.x+=3;
  } 
}

if(player.x >-1788){
  if (keyDown("left_arrow")){
    player.x-=3;
  }  
}

if(player.y >55){
  if(keyDown("up_arrow")){
    player.y-=3;
  }
}

if(player.y <530){
  if(keyDown("down_arrow")){
    player.y+=3;
  }
}




  if(frameCount%300 == 0 && gamestate==0){
      spellattack();
   
  }
}

if(spellgroup.isTouching(player)){
  gamestate = 1;
  spell.destroy();
  player.remove();
  backGround.remove();
  // roke("yellow");
  fill("yellow");
  textSize(30);
  text("GAME OVER",230,250);
  
    // player.addImage("dead",playerdead);
  // player.y+=1;

}

if(gamestate===1){
  background("red");
  stroke("yellow");
  fill("yellow");
  textSize(30);
  text("GAME OVER",player.x,player.y);
  // console.log("dd");
}
// console.log(gamestate);



  
  // console.log(player.y);
  // console.log(frameCount);
}

function spellattack(){
  spell = createSprite();
  spell.addImage('spell',spellimg);
  spell.x = player.x + 450;
  spell.y = player.y;
  spell.velocity.x = -5;
  spell.lifetime = 500;
  spellgroup.add(spell);

}