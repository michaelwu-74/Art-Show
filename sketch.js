var player
var backGround
var level
var startScreen
var trash
var skyBorder
var tick = 0
var second1 = 1
var minute1 = 0
var coinsCollected = 0
var secondsLeft = 60

function setup(){
  createCanvas(800,500);
  level = 1
//----------------------------------------------------------
 startScreen = createSprite(width/2,height/2,10,100)
 startScreen.addAnimation("startScreen","StartScreen.png")
 startScreen.scale = 0.6
//----------------------------------------------------------
  backGround = createSprite(width/2,height/2,10,100)
  backGround.scale = 1
  backGround.addAnimation("backGround","Background.png")
//----------------------------------------------------------
  player = createSprite(70,440,10,10)
  player.setCollider('rectangle', 0, -3, 50, 100)
  player.scale = 0.3
  player.addAnimation("playerMoving","player1.png","player8.png")
  player.addAnimation("idle","player1.png")
  player.changeAnimation('idle')
//----------------------------------------------------------
  skyBorder = createSprite(100,372,3000,10)
  skyBorder.setCollider('rectangle',0,0,3000,10)
//----------------------------------------------------------

//----------------------------------------------------------
}

function draw(){
  background(255,255,255);  
  skyBorder.visible = false;
//----------------------------------------------------------
  player.debug = mouseIsPressed;
  skyBorder.debug = mouseIsPressed;
  player.collide(skyBorder)
//----------------------------------------------------------
// Key 13 is the Enter key.
   if (keyIsDown(13)) {
    level = 2
  }
  //----------------------------------------------------------
 if (level === 1) {
    background("black")
    fill("white")
    text("Press [Enter] to start!", width/2 - 60, 100)

    //startScreen.visible = true
    player.visible = false
    backGround.visible = false

  } else if (level === 2) {
    clear()
    tick = tick + 1
    //startScreen.visible = false
    player.visible = true
    backGround.visible = true
 
  } else if (level === 3) {
    clear()

    fill(0, 0, 0)
    textSize(100);
      text(coinsCollected + " Apples!", 170, 300);
   
  }
//----------------------------------------------------------
   drawSprites();
  player.velocity.x = 0;
  player.velocity.y = 0;
   if (keyIsDown(LEFT_ARROW)) {
    player.changeAnimation('playerMoving')
    player.velocity.x = -5;
    player.mirrorX(-1);
  }
  else {
    player.changeAnimation('idle')
    player.mirrorY(1)
  }
  if (keyIsDown(RIGHT_ARROW)) {
    player.mirrorX(1);
    player.changeAnimation('playerMoving')
    player.velocity.x = 5;
  }
  else {
    player.mirrorY(1)
  }
  if (keyIsDown(DOWN_ARROW)) {
    player.velocity.y = 5;
    player.changeAnimation('playerMoving')
  }
  if (keyIsDown(UP_ARROW)) {
    player.velocity.y = -5;
    player.changeAnimation('playerMoving')  
  }
//----------------------------------------------------------
  //Borders
  //skyBorder = rect(1, 1, 798, 100) 
  fill(0, 0, 0)
  border1 = rect(1, 1, 798, 10)
  border2 = rect(1, 1, 10, 623)
  border3 = rect(1, 614, 798, 10)
  border4 = rect(789, 1, 10, 623)

  for (var i = 0; i < allSprites.length; i++) {

    var s = allSprites[i];
    if (s.position.x < 0) {
      s.position.x = 1;
      s.velocity.x = abs(s.velocity.x);
    }
    if (s.position.x < 0) {
      s.position.x = 1;
      s.velocity.x = abs(s.velocity.x);
    }

    if (s.position.x > width) {
      s.position.x = width - 1;
      s.velocity.x = -abs(s.velocity.x);
    }

    if (s.position.y < 0) {
      s.position.y = 1;
      s.velocity.y = abs(s.velocity.y);
    }

    if (s.position.y > height) {
      s.position.y = height - 1;
      s.velocity.y = -abs(s.velocity.y);
    }
  }


  if (tick === 70) {
    secondsLeft = secondsLeft - second1
    tick = 0
  }

  if (secondsLeft === 0) {
    level = 3


  }
    fill(0, 0, 0)
    textSize(15);
    text(coinsCollected + " Coins Collected", 15, 50);
    textSize(15);
    text("Time left: " + secondsLeft,15, height/2);







} 
