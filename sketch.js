function preload(){
bg1 = loadImage("bg/bg1.PNG")
stg1 = loadImage("bg/stg1.PNG")

playImg = loadImage("buttons/play.PNG")
nextImg = loadImage("buttons/next.PNG")
retryImg = loadImage("buttons/restart.PNG")
backImg = loadImage("buttons/back.PNG")

pnImg = loadImage("sprites/n.PNG")
psImg = loadImage("sprites/s.PNG")
pwImg = loadImage("sprites/w.PNG")
peImg = loadImage("sprites/e.PNG")

pnrImg = loadImage("sprites/nRr.PNG")
psrImg = loadImage("sprites/sRr.PNG")
pwrImg = loadImage("sprites/wRr.PNG")
perImg = loadImage("sprites/eRr.PNG")

pnRImg = loadImage("sprites/nR.PNG")
psRImg = loadImage("sprites/sR.PNG")
pwRImg = loadImage("sprites/wR.PNG")
peRImg = loadImage("sprites/eR.PNG")

e1n = loadImage("sprites/e1n.PNG")
e1s = loadImage("sprites/e1s.PNG")
e1w = loadImage("sprites/e1w.PNG")
e1e = loadImage("sprites/e1e.PNG")

rrStats = loadImage("rrstats.PNG");
RrStats = loadImage("rstats.PNG");
RRStats = loadImage("statsRR.PNG");

shadowImg = loadImage("sprites/shadow.PNG")
boxImg = loadImage("sprites/box.PNG")

hp1 = loadImage("sprites/hp1.PNG")
hp2 = loadImage("sprites/hp2.PNG")
hp3 = loadImage("sprites/hp3.PNG")
hp4 = loadImage("sprites/hp4.PNG")
hp5 = loadImage("sprites/hp5.PNG")
hp6 = loadImage("sprites/hp6.PNG")
hp7 = loadImage("sprites/hp7.PNG")

chestImg = loadImage("sprites/chest.PNG")

elImg = loadImage("sprites/el.PNG")

bosseImg = loadImage("sprites/bosse.PNG")
bosswImg = loadImage("sprites/bossw.PNG")
bossnImg = loadImage("sprites/bossn.PNG")
bosssImg = loadImage("sprites/bosss.PNG")

zoneImg = loadImage("sprites/zone.png")

menuImg = loadImage("buttons/menu.png")

RRRRImg = loadImage("RR/R.png")
RRrrImg = loadImage("RR/Rr.png")
RRRrImg = loadImage("RR/RRr.png")

rrrrImg = loadImage("Rrf/r.png")
RrrrImg = loadImage("Rrf/Rrr.png")
RrRrImg = loadImage("Rrf/RrRr.png")

rltImg = loadImage("sprites/rl.png")

bhImg = loadImage("sprites/bh.png")

bb = loadSound("sfx/bossbattle.wav")
cc = loadSound("sfx/clic.mp3")
eh = loadSound("sfx/enemyhit.wav")
pd = loadSound("sfx/playerdamage.wav")
ph = loadSound("sfx/playerhit.wav")
st = loadSound("sfx/shoot.wav")

grrImg = loadImage("sprites/rr.png")
gRrImg = loadImage("sprites/gRr.png")
gRRImg = loadImage("sprites/RRg.png")

homeImg = loadImage("buttons/home.png")

wastedImg = loadImage("buttons/wasted.png")

}

function setup() {
  createCanvas(1000,600);

 

  play = createSprite(500, 400, 50, 50);
  play.addImage(playImg)
  play.scale = 1.5
  play.visible = true

  next = createSprite(900, 550, 50, 50);
  next.addImage(nextImg)
  next.scale = 0.5
  next.visible = false

  back = createSprite(100, 550, 50, 50);
  back.addImage(backImg);
  back.scale = 0.5
  back.visible = false

  moveCanvas = createSprite(-1050,550)
  moveCanvas.scale = 4
  
  zone = createSprite(0,0)
  zone.addImage(zoneImg)
  zone.visible = false

  gs = 0

  playerDirection = "s";
  changeinX = 0;
  changeinY = 0;
  char = ""
  starthp = 0
  hp = 0
  speed = 0
  fr = 0
  
  bullet = createSprite(0,0,0,0)
  bullet.shapeColor = "yellow"
  bullet.visible = false

  bl1 = createSprite(0,0,0,0)
  bl1.shapeColor = "red"
  bl1.visible = false

  bl2 = createSprite(0,0,0,0)
  bl2.shapeColor = "red"
  bl2.visible = false

  bl3 = createSprite(0,0,0,0)
  bl3.shapeColor = "red"
  bl3.visible = false

  bl4 = createSprite(0,0,0,0)
  bl4.shapeColor = "red"
  bl4.visible = false

  bl5 = createSprite(0,0,0,0)
  bl5.shapeColor = "red"
  bl5.visible = false

  bl6 = createSprite(0,0,0,0)
  bl6.shapeColor = "red"
  bl6.visible = false

  bl7 = createSprite(0,0,0,0)
  bl7.shapeColor = "red"
  bl7.visible = false

  bl8 = createSprite(0,0,0,0)
  bl8.shapeColor = "red"
  bl8.visible = false

  bl9 = createSprite(0,0,0,0)
  bl9.shapeColor = "red"
  bl9.visible = false

  bl10 = createSprite(0,0,0,0)
  bl10.shapeColor = "red"
  bl10.visible = false

  bl11 = createSprite(0,0,0,0)
  bl11.shapeColor = "red"
  bl11.visible = false

  bl12 = createSprite(0,0,0,0)
  bl12.shapeColor = "red"
  bl12.visible = false

  bl13 = createSprite(0,0,0,0)
  bl13.shapeColor = "red"
  bl13.visible = false

  bl14 = createSprite(0,0,0,0)
  bl14.shapeColor = "red"
  bl14.visible = false

  bl15 = createSprite(0,0,0,0)
  bl15.shapeColor = "red"
  bl15.visible = false

  ob1 = createSprite(0,0)
  ob1.addImage(boxImg) 
  ob1.visible = false

  ob2 = createSprite(0,0)
  ob2.addImage(boxImg)
  ob2.visible = false

  ob3 = createSprite(0,0)
  ob3.addImage(boxImg)
  ob3.visible = false

  ob4 = createSprite(0,0)
  ob4.addImage(boxImg)
  ob4.visible = false

  e1 = createSprite(0,0,0,0)
  e1.visible = false
  e1D = 1
  e1.scale = 0.75
  e1P = createSprite(0,0,0,0)
  e1P.visible = false
  e1P.shapeColor = "blue"
  e1Charge = createSprite(10,0,5,10)
  e1Charge.visible = false
  e1Stat = "A"
  e1Bullet = createSprite(0,0,0,0,)
  e1Bullet.shapeColor = "maroon"
  e1Bullet.visible = false

  e2 = createSprite(0,0,0,0)
  e2.visible = false
  e2D = 1
  e2.scale = 0.75
  e2P = createSprite(0,0,0,0)
  e2P.visible = false
  e2P.shapeColor = "blue";
  e2Charge = createSprite(10,0,5,10)
  e2Charge.visible = false
  e2Stat = "A"
  e2Bullet = createSprite(0,0,0,0,)
  e2Bullet.shapeColor = "maroon"
  e2Bullet.visible = false

  e3 = createSprite(0,0,0,0)
  e3.visible = false
  e3D = 1
  e3.scale = 0.75
  e3P = createSprite(0,0,0,0)
  e3P.visible = false
  e3P.shapeColor = "blue";
  e3Charge = createSprite(10,0,5,10)
  e3Charge.visible = false
  e3Stat = "A"
  e3Bullet = createSprite(0,0,0,0,)
  e3Bullet.shapeColor = "maroon"
  e3Bullet.visible = false

  e4 = createSprite(0,0,0,0)
  e4.visible = false
  e4D = 1
  e4.scale = 0.75
  e4P = createSprite(0,0,0,0)
  e4P.visible = false
  e4P.shapeColor = "blue";
  e4Charge = createSprite(10,0,5,10)
  e4Charge.visible = false
  e4Stat = "A"
  e4Bullet = createSprite(0,0,0,0,)
  e4Bullet.shapeColor = "maroon"
  e4Bullet.visible = false

  e5 = createSprite(0,0,0,0)
  e5.visible = false
  e5D = 1
  e5.scale = 0.75
  e5P = createSprite(0,0,0,0)
  e5P.visible = false
  e5P.shapeColor = "blue";
  e5Charge = createSprite(10,0,5,10)
  e5Charge.visible = false
  e5Stat = "A"
  e5Bullet = createSprite(0,0,0,0,)
  e5Bullet.shapeColor = "maroon"
  e5Bullet.visible = false

  e6 = createSprite(0,0,0,0)
  e6.visible = false
  e6D = 1
  e6.scale = 0.75
  e6P = createSprite(0,0,0,0)
  e6P.visible = false
  e6P.shapeColor = "blue";
  e6Charge = createSprite(10,0,5,10)
  e6Charge.visible = false
  e6Stat = "A"
  e6Bullet = createSprite(0,0,0,0,)
  e6Bullet.shapeColor = "maroon"
  e6Bullet.visible = false

  e7 = createSprite(0,0,0,0)
  e7.visible = false
  e7D = 1
  e7.scale = 0.75
  e7P = createSprite(0,0,0,0)
  e7P.visible = false
  e7P.shapeColor = "blue";
  e7Charge = createSprite(10,0,5,10)
  e7Charge.visible = false
  e7Stat = "A"
  e7Bullet = createSprite(0,0,0,0,)
  e7Bullet.shapeColor = "maroon"
  e7Bullet.visible = false

  bossb1 = createSprite(10,10)
  bossb1.shapeColor = "purple"
  bossb1.visible = false
  bossb2 = createSprite(10,10)
  bossb2.shapeColor = "purple"
  bossb2.visible = false
  bossb3 = createSprite(10,10)
  bossb3.shapeColor = "purple"
  bossb3.visible = false

  boss = createSprite(500,300)
  boss.addImage(bosseImg)
  boss.scale = 1.5
  boss.visible = false
  bossD = 1
  bossStat = "NA"
  bossCounter = 0

  g = createSprite(0,0)
  g.visible = false
  


  bossCharge = createSprite(0,0,5,10)

  chest = createSprite(0,0,90,50)
  g = createSprite(0,0)
  g.visible = false
  chest.addImage(chestImg)
  chest.scale = 0.09
  chest.visible = false

  player = createSprite(500,300)
  player.scale = 1
  player.addImage(psImg)
  //player.debug = true
  player.setCollider("rectangle",0,0,65,110)

  playerRange = createSprite(0,0,10,0)
  playerRange.shapeColor = "purple"
  playerRange.visible = false

  shadow = createSprite(0,0)
  shadow.addImage(shadowImg)
  shadow.scale = 2
  shadow.visible = false

  blGrp = createGroup();
  obGrp = createGroup();

  hpbar = createSprite(100,530)
  hpbar.addImage(hp5)
  hpbar.scale = 0.5

  player.visible = false
  shadow.visible = false
  
  hpbar.visible = false

  timeCharge = createSprite(0,0,10,0)
  timeCharge.shapeColor = "white"
  timeCharge.visible = false

  timeCounter = 0

  bulletCharge = createSprite(0,0,10,0)
  bulletCharge.visible = false

  bulletCounter = 0

  e = 7

  charSel = createSprite(0,0,168,111)
  charSel.shapeColor = "#ed9911"
  charSel.visible = false

  rr = createSprite(350,150)
  rr.addImage(rrStats);
 // rr.scale = 1.5
  rr.visible = false
  
  Rr = createSprite(350,280)
  Rr.addImage(RrStats);
 // Rr.scale = 1.5
  Rr.visible = false
  
  RR = createSprite(350,410)
  RR.addImage(RRStats);
 // RR.scale = 1.5 
  RR.visible = false 

  frtime = createSprite(850,300,20)
  frtime.shapeColor = "cyan"
  frtime.visible = false

  el = createSprite(950,300,20)
  el.shapeColor = "purple"
  el.visible = false

  elt = createSprite(900,300)
  elt.addImage(elImg)
  elt.scale = 0.25
  elt.visible = false

  zones = 0.25
  zoneCharge = createSprite(0,0)
  zoneCounter = 0
  zoneCharge.visible = false

  bosshp = 10
  bosshpc = createSprite(500,50,0,25)
  bosshpc.shapeColor = "purple"
  bosshpc.visible = false
  
  menu = createSprite(500,300)
  menu.addImage(menuImg)
  menu.visible = false

  cg = 0
  gf = createSprite(500,305)
  gf.visible = false
  gf.scale = 2.5

  rlt = createSprite(820,300)
  rlt.addImage(rltImg)
  rlt.scale = 0.25
  rlt.visible = false

  bh = createSprite(500,25)
  bh.addImage(bhImg)
  bh.scale = 0.5
  bh.visible = false

  soundCharge = createSprite(0,0,0,0)
  soundCharge.visible = false

  soundCounter = 0

  wasted = createSprite(500,300)
  wasted.addImage(wastedImg)
  wasted.visible = false

  retry = createSprite(110,70)
  retry.addImage(retryImg);
  retry.scale = 0.5
  retry.visible = false

  home = createSprite(890,70)
  home.addImage(homeImg)
  home.scale = 0.5
  home.visible = false

 

}

function draw() {

  if(e1Bullet.overlap(obGrp)||e1Bullet.overlap(blGrp)){
    e1Bullet.x = e1.x
    e1Bullet.y = e1.y
  }
  
  if(e2Bullet.overlap(obGrp)||e2Bullet.overlap(blGrp)){
    e2Bullet.x = e2.x
    e2Bullet.y = e2.y
  }

  if(e3Bullet.overlap(obGrp)||e3Bullet.overlap(blGrp)){
    e3Bullet.x = e3.x
    e3Bullet.y = e3.y
  }

  if(e4Bullet.overlap(obGrp)||e4Bullet.overlap(blGrp)){
    e4Bullet.x = e4.x
    e4Bullet.y = e4.y
  }

  if(e5Bullet.overlap(obGrp)||e5Bullet.overlap(blGrp)){
    e5Bullet.x = e5.x
    e5Bullet.y = e5.y
  }

  if(e6Bullet.overlap(obGrp)||e6Bullet.overlap(blGrp)){
    e6Bullet.x = e6.x
    e6Bullet.y = e6.y
  }

  if(e7Bullet.overlap(obGrp)||e7Bullet.overlap(blGrp)){
    e7Bullet.x = e7.x
    e7Bullet.y = e7.y
  }

  

  if(frtime.visible === true){
    rlt.visible = true
  }
  else{
    rlt.visible = false
  }
  

  if(cg === 1||cg === 4){
    g.addImage(grrImg)
    g.scale = 0.5
  }
  if(cg === 2||cg === 5){
    g.addImage(gRrImg)
    g.scale = 0.5
  }
  if(cg === 3||cg === 6){
    g.addImage(gRRImg)
    g.scale = 0.5
  }

  g.x = chest.x 
  g.y = chest.y - 70

  if(gs === "dead"){
    bosshpc.visible = false
    boss.stat = "NA"
    bh.visible = false
    bossb1.visible = false
    bossb2.visible = false
    bossb3.visible = false
    wasted.visible = true
    retry.visible = true
    home.visible = true
    retry.x = 500
    home.x = 500
    retry.y = 325
    home.y = 475
    home.scale = 0.75
    retry.scale = 0.75
    elt.visible = false
    el.visible = false
    if(mousePressedOver(home)){
      bosshpc.visible = false
      bullet.visible = false
      g.visible = false
        chest.visible = false
      zones = 0.25
      home.scale = 0.5
      retry.scale = 0.5
      home.x = 890
      home.y = 70
      retry.x = 110
      retry.y = 70
      wasted.visible = false
      cc.play()
      shadow.visible = false
      home.visible = false
      hpbar.visible = false
      el.visible = false
      e = 7
      elt.visible = false
      bosshp = 10
      bosshpc.visible = false
      retry.visible = false
      gs = 0
      player.visible = false
      moveCanvas.visible = false
      e1.visible = false
      e2.visible = false
      e3.visible = false
      e4.visible = false
      e5.visible = false
      e6.visible = false
      e7.visible = false
      ob1.visible = false
      ob2.visible = false
      ob3.visible = false
      ob4.visible = false
      e1Bullet.visible = false
      e2Bullet.visible = false
      e3Bullet.visible = false
      e4Bullet.visible = false
      e5Bullet.visible = false
      e6Bullet.visible = false
      e7Bullet.visible = false
      e1Stat = "NA"
      e2Stat = "NA"
      e3Stat = "NA"
      e4Stat = "NA"
      e5Stat = "NA"
      e6Stat = "NA"
      e7Stat = "NA"
      boss.visible = false
      bossStat = "NA"

      cc.play()
    player.x = 500
    player.y = 300
    hp = starthp
    moveCanvas.x = -1050
    moveCanvas.y = 550
    playerDirection = "s"
    e = 7
    if(char === "rr"){
      hp = 3
    }
    if(char === "Rr"){
      hp = 6
    }
    if(char === "RR"){
      hp = 4
    }
    e1.x = moveCanvas.x + 500
    e1.y = moveCanvas.y - 250

    e2.x = moveCanvas.x - 500
    e2.y = moveCanvas.y - 250
   
    
    e3.x = moveCanvas.x + 500
    e3.y = moveCanvas.y + 250
   

    e4.x = moveCanvas.x - 500
    e4.y = moveCanvas.y + 250
   
    e5.x = moveCanvas.x
    e5.y = moveCanvas.y
     

    e6.x = moveCanvas.x + 1250
    e6.y = moveCanvas.y - 75
   

    e7.x = moveCanvas.x - 1250
    e7.y = moveCanvas.y - 20
    }
    if(mousePressedOver(retry)){
      bossStat = "NA"
      bosshp = 10
      boss.visible = false
      g.visible = true
        chest.visible = true
      zones = 0.25
      gs = 1
      home.scale = 0.5
      retry.scale = 0.5
      home.x = 890
      home.y = 70
      retry.x = 110
      retry.y = 70
      wasted.visible = false
      bosshpc.visible = false
      bossStat = "NA"
      boss.visible = false
      cc.play()
      player.x = 500
      player.y = 300
      hp = starthp
      moveCanvas.x = -1050
      moveCanvas.y = 550
      playerDirection = "s"
      e = 7
      if(char === "rr"){
        hp = 3
      }
      if(char === "Rr"){
        hp = 6
      }
      if(char === "RR"){
        hp = 4
      }
      e1.x = moveCanvas.x + 500
      e1.y = moveCanvas.y - 250
      e1.visible = true
      e1Stat = "A"
  
      e2.x = moveCanvas.x - 500
      e2.y = moveCanvas.y - 250
      e2.visible = true
      e2Stat = "A"
      
      e3.x = moveCanvas.x + 500
      e3.y = moveCanvas.y + 250
      e3.visible = true
      e3Stat = "A"
  
      e4.x = moveCanvas.x - 500
      e4.y = moveCanvas.y + 250
      e4.visible = true
      e4Stat = "A"
      
      e5.x = moveCanvas.x
      e5.y = moveCanvas.y
      e5.visible = true
      e5Stat = "A"
  
     
  
      e6.x = moveCanvas.x + 1250
      e6.y = moveCanvas.y - 75
      e6.visible = true
      e6Stat = "A"
  
      e7.x = moveCanvas.x - 1250
      e7.y = moveCanvas.y - 20
      e7.visible = true
      e7Stat = "A"
    }
  }
  
  if(gs === 1){

    if(e === 0){
      e1.x = 1500
      e2.x = 1500
      e3.x = 1500
      e4.x = 1500
      e5.x = 1500
      e6.x = 1500
      e7.x = 1500
      soundCharge.velocityY = 50
    }
    if(soundCharge.y > 600)

    if(bulletCounter === 0){
      rlt.visible = false
    } 
    else{
      rlt.visible = true
    }
  }
  if(cg === 1&&char === "rr"){
    gf.addImage(rrrrImg)
  }
  if(cg === 1&&char === "Rr"){
    gf.addImage(RrrrImg)
  }
  if(cg === 1&&char === "RR"){
    gf.addImage(RRrrImg)
  }

  if(cg === 2&&char === "rr"){
    gf.addImage(RrrrImg)
  }
  if(cg === 2&&char === "Rr"){
    gf.addImage(RrRrImg)
  }
  if(cg === 2&&char === "RR"){
    gf.addImage(RRRrImg)
  }

  if(cg === 3&&char === "rr"){
    gf.addImage(RRrrImg)
  }
  if(cg === 3&&char === "Rr"){
    gf.addImage(RRRrImg)
  }
  if(cg === 3&&char === "RR"){
    gf.addImage(RRRRImg)
  }

  if(player.overlap(obGrp) || player.overlap(blGrp)&&gs > 0){
    if(playerDirection === "n"){
      moveCanvas.y = moveCanvas.y - 20
    }
    if(playerDirection === "s"){
      moveCanvas.y = moveCanvas.y + 20
    }
    if(playerDirection === "w"){
      moveCanvas.x = moveCanvas.x - 20
    }
    if(playerDirection === "e"){
      moveCanvas.x = moveCanvas.x + 20
    }

  }
    if(gs === 1){
      if(e1Stat === "NA"){
        e1Bullet.x = 1500
        e1Bullet.velocityX = 0
        e1Bullet.velocityY = 0
      }
      if(e2Stat === "NA"){
        e2Bullet.x = 1500
        e2Bullet.velocityX = 0
        e2Bullet.velocityY = 0
      }
      if(e3Stat === "NA"){
        e3Bullet.x = 1500
        e3Bullet.velocityX = 0
        e3Bullet.velocityY = 0
      }
      if(e3Stat === "NA"){
        e3Bullet.x = 1500
        e3Bullet.velocityX = 0
        e3Bullet.velocityY = 0
      }
      if(e4Stat === "NA"){
        e4Bullet.x = 1500
        e4Bullet.velocityX = 0
        e4Bullet.velocityY = 0
      }
      if(e5Stat === "NA"){
        e5Bullet.x = 1500
        e5Bullet.velocityX = 0
        e5Bullet.velocityY = 0
      }
      if(e6Stat === "NA"){
        e6Bullet.x = 1500
        e6Bullet.velocityX = 0
        e6Bullet.velocityY = 0
      }
      if(e7Stat === "NA"){
        e7Bullet.x = 1500
        e7Bullet.velocityX = 0
        e7Bullet.velocityY = 0
      }
      zone.setCollider("circle",0,0)

      if(player.overlap(zone)&&zoneCounter === 0&&bossStat === "A"){
        zoneCounter = 1
        ph.play()
        zoneCharge.velocityY = 30
        hp = hp - 0.5
      }
      if(zoneCharge.y > 600){
        zoneCharge.y = 0
        zoneCounter = zoneCounter + 1
      }
      if(zoneCounter === 6){
        zoneCounter = 0
        zoneCharge.y = 0
        zoneCharge.velocityY = 0
      }

      zone.x = boss.x
      zone.y = boss.y
      zone.scale = zones
      boss.x = moveCanvas.x
      boss.y = moveCanvas.y
      elt.visible = true
      if(hp < 0){
        gs = "dead"
        hpbar.visible = false

      }

    if(player.overlap(e1Bullet)&&player.overlap(e1) === false){
      e1Bullet.x = e1.x
      e1Bullet.y = e1.y
      hp = hp - 0.5
      ph.play()

    }
    if(e2Bullet.overlap(player)&&player.overlap(e2) === false){
      hp = hp - 0.5
      e2Bullet.x = e2.x
      e2Bullet.y = e2.y
      ph.play()
    }
    if(e3Bullet.overlap(player)&&player.overlap(e3) === false){
      hp = hp - 0.5
      e3Bullet.x = e3.x
      e3Bullet.y = e3.y
      ph.play()
    }
    if(e4Bullet.overlap(player)&&player.overlap(e4) === false){
      hp = hp - 0.5
      e4Bullet.x = e4.x
      e4Bullet.y = e4.y
      ph.play()
    }
    if(e5Bullet.overlap(player)&&player.overlap(e5) === false){
      hp = hp - 0.5
      e5Bullet.x = e5.x
      e5Bullet.y = e5.y
      ph.play()
    }
    if(e6Bullet.overlap(player)&&player.overlap(e6) === false){
      hp = hp - 0.5
      e6Bullet.x = e6.x
      e6Bullet.y = e6.y
      ph.play()
    }
    if(e7Bullet.overlap(player)&&player.overlap(e7) === false){
      hp = hp - 0.5
      e7Bullet.x = e7.x
      e7Bullet.y = e7.y
      ph.play()
    }

    charSel.visible = false
    chest.visible = true
    if(e1Stat === "A"){
    e1.x = moveCanvas.x + 500
    e1.y = moveCanvas.y - 250
    e1.visible = true
    }
    if(e2Stat === "A"){
    e2.x = moveCanvas.x - 500
    e2.y = moveCanvas.y - 250
    e2.visible = true
    }
    if(e3Stat === "A"){
    e3.x = moveCanvas.x + 500
    e3.y = moveCanvas.y + 250
    e3.visible = true
    }
    if(e4Stat === "A"){
    e4.x = moveCanvas.x - 500
    e4.y = moveCanvas.y + 250
    e4.visible = true
    }
    if(e5Stat === "A"){
    e5.x = moveCanvas.x
    e5.y = moveCanvas.y
    e5.visible = true
    }
    if(e6Stat === "A"){
    e6.x = moveCanvas.x + 1250
    e6.y = moveCanvas.y - 75
    e6.visible = true
    }
    if(e7Stat === "A"){
    e7.x = moveCanvas.x - 1250
    e7.y = moveCanvas.y - 20
    e7.visible = true
    }

    if(bossStat === "A"){
      boss.x = moveCanvas.x
      boss.y = moveCanvas.y
      boss.visible = true
      zone.visible = true
      
      if(player.overlap(bossb1)){
        ph.play()
        bossb1.x = boss.x
        bossb1.y = boss.y
        hp = hp - 0.25
        if(bossD === 1){
          moveCanvas.y = moveCanvas.y + 10
        }
        if(bossD === 2){
          moveCanvas.x = moveCanvas.x - 10
        }
        if(bossD === 3){
          moveCanvas.y = moveCanvas.y - 10
        }
        if(bossD === 4){
          moveCanvas.x = moveCanvas.x + 10
        }
      }
      if(player.overlap(bossb2)){
        ph.play()
        bossb2.x = boss.x
        bossb2.y = boss.y
        hp = hp - 0.25
        if(bossD === 1){
          moveCanvas.y = moveCanvas.y + 10
        }
        if(bossD === 2){
          moveCanvas.x = moveCanvas.x - 10
        }
        if(bossD === 3){
          moveCanvas.y = moveCanvas.y - 10
        }
        if(bossD === 4){
          moveCanvas.x = moveCanvas.x + 10
        }
      }
      if(player.overlap(bossb3)){
        ph.play()
        bossb3.x = boss.x
        bossb3.y = boss.y
        hp = hp - 0.25
        if(bossD === 1){
          moveCanvas.y = moveCanvas.y + 10
        }
        if(bossD === 2){
          moveCanvas.x = moveCanvas.x - 10
        }
        if(bossD === 3){
          moveCanvas.y = moveCanvas.y - 10
        }
        if(bossD === 4){
          moveCanvas.x = moveCanvas.x + 10
        }
      }

    }

    el.visible = true
    el.height = e*28.5
    if(e === 0){
      el.visible = false
      elt.visible = false
      bossStat = "A"    
      //bh.visible = true
    }
    else{
      el.visible = true
    }

    if(bossStat === "A"){
      boss.visible = true
      bossb1.visible = true
      bossb2.visible = true
      bossb3.visible = true
      bh.visible = true      
    }
    if(bossStat === "NA"){
      boss.visible = false
      bossb1.visible = false
      bossb2.visible = false
      bossb3.visible = false
      bh.visible = false      
    }

  }

  if(char === "Rr"){
  if(bulletCounter === 6){
    frtime.height = 33
    frtime.visible = true
  }
  if(bulletCounter === 5){
    frtime.height = 66.67
    frtime.visible = true
  }
  if(bulletCounter === 4){
    frtime.height = 100
    frtime.visible = true
  }
  if(bulletCounter === 3){
    frtime.height = 133
    frtime.visible = true
  }
  if(bulletCounter === 2){
    frtime.height = 166.67
    frtime.visible = true
  }
  if(bulletCounter === 1){
    frtime.height = 200
    frtime.visible = true
  }
}

if(char === "rr"){
  if(bulletCounter === 3){
    frtime.height = 66.67
    frtime.visible = true
  }
  if(bulletCounter === 2){
    frtime.height = 133
    frtime.visible = true
  }
  if(bulletCounter === 1){
    frtime.height = 200
    frtime.visible = true
  }
}

if(char === "RR"){
  if(bulletCounter === 2){
    frtime.height = 100
    frtime.visible = true
  }
  if(bulletCounter === 1){
    frtime.height = 200
    frtime.visible = true
  }

}
  

  if(bulletCounter === 0){
    frtime.visible = false
  }

  if(bulletCharge.y > 400){
    bulletCharge.y = 0
    bulletCounter = bulletCounter + 1
  }

  if(bulletCounter > fr){
    bulletCounter = 0
    bulletCharge.velocityY = 0
    bulletCharge.y = 0
    bullet.velocityX = 0
    bullet.velocityY = 0
  }
  
  if(char === "rr"){
    starthp = 3
    speed = 15
    fr = 4
  }
  if(char === "Rr"){
    starthp = 6
    speed = 10
    fr = 6
  }
  if(char === "RR"){
    starthp = 4
    speed = 7
    fr = 3
  }

  if(hp === 6){
    hpbar.addImage(hp6)
    //hpbar.scale = 0.5
  }
  
  if(hp === 5){
    hpbar.addImage(hp5)
    //hpbar.scale = 0.65
  }

  if(hp === 4){
    hpbar.addImage(hp4)
    //hpbar.scale = 0.75
  }

  if(hp === 3){
    hpbar.addImage(hp3)
    //hpbar.scale = 1
  }

  if(hp === 2){
    hpbar.addImage(hp2)
    //hpbar.scale = 1
  }

  if(hp === 1){
    hpbar.addImage(hp1)
    //hpbar.scale = 1
  }

  if(hp === 0){
    hpbar.visible = false
  }



  

  if(gs === 0.4){
    if(keyDown("1")||mousePressedOver(rr)){
      char = "rr"
      player.addImage(psImg)
      //cc.play()
      charSel.visible = true
      charSel.x = rr.x
      charSel.y = rr.y
    }
    if(keyDown("2")||mousePressedOver(Rr)){
      char = "Rr"
      player.addImage(psrImg)
      charSel.visible = true
      //cc.play()
      charSel.x = Rr.x
      charSel.y = Rr.y
    }
    if(keyDown("3")||mousePressedOver(RR)){
      char = "RR"
      player.addImage(psRImg)
      //cc.play()
      charSel.visible = true
      charSel.x = RR.x
      charSel.y = RR.y
    }
  }  

  obGrp.add(ob1)
  obGrp.add(ob2)
  obGrp.add(ob3)
  obGrp.add(ob4)

  blGrp.add(bl1)
  blGrp.add(bl2)
  blGrp.add(bl3)
  blGrp.add(bl4)
  blGrp.add(bl5)
  blGrp.add(bl6)
  blGrp.add(bl7)
  blGrp.add(bl8)
  blGrp.add(bl9)
  blGrp.add(bl10)
  blGrp.add(bl11)
  blGrp.add(bl12)
  blGrp.add(bl13)
  blGrp.add(bl14)
  blGrp.add(bl15)

  if(bullet.collide(obGrp) || bullet.collide(blGrp)){
    bullet.x = player.x
    bullet.y = player.y
    bullet.visible = false
  }

  if(gs === 0){
    play.visible = true
    bl1.visible = false
    bl2.visible = false
    bl3.visible = false
    bl4.visible = false
    bl5.visible = false
    bl6.visible = false
    bl7.visible = false
    bl8.visible = false
    bl9.visible = false
    bl10.visible = false
    bl11.visible = false
    bl12.visible = false
    bl13.visible = false
    bl14.visible = false
    bl15.visible = false

  }
  else{
    play.visible = false
  }

  if(gs === 0.4){
    rr.visible = true
    Rr.visible = true
    RR.visible = true
  }
  else{
    rr.visible = false
    Rr.visible = false
    RR.visible = false
  }

  if(gs === 0.2||gs === 0.4||gs === 0.6){
    next.visible = true
    back.visible = true
    bossb1.visible = false
    bossb2.visible = false
    bossb3.visible = false

  }
  else{
    next.visible = false
    back.visible = false
  }


  if(timeCharge.y > 600){
  timeCharge.y = 0
  timeCounter = timeCounter + 1
  }

  if(timeCounter === 2){
    timeCharge.y = 0
    timeCharge.velocityY = 0
    timeCounter = 0
  }

  if(mousePressedOver(play)&&gs === 0&&timeCounter === 0){
    gs = 0.2
    timeCharge.velocityY = 50
    cc.play()
    timeCounter = 1
  }
  if(mousePressedOver(next)&&gs === 0.2&&timeCounter === 0){
    gs = 0.4
    timeCharge.velocityY = 50
    cc.play()
    timeCounter = 1

  }
  if(mousePressedOver(next)&&gs === 0.4&&timeCounter === 0&&char !== ""){
    gs = 1
    g.visible = true
        chest.visible = true
    shadow.visible = true
    moveCanvas.visible = true
    timeCharge.velocityY = 50   
    cc.play()
    timeCounter = 1 
    player.x = 500
    player.y = 300
    hp = starthp
    moveCanvas.x = -1050
    moveCanvas.y = 550
    playerDirection = "s"
    e = 7
    if(char === "rr"){
      hp = 3
    }
    if(char === "Rr"){
      hp = 6
    }
    if(char === "RR"){
      hp = 4
    }
    e1.x = moveCanvas.x + 500
    e1.y = moveCanvas.y - 250
    e1.visible = true
    e1Stat = "A"

    e2.x = moveCanvas.x - 500
    e2.y = moveCanvas.y - 250
    e2.visible = true
    e2Stat = "A"
    
    e3.x = moveCanvas.x + 500
    e3.y = moveCanvas.y + 250
    e3.visible = true
    e3Stat = "A"

    e4.x = moveCanvas.x - 500
    e4.y = moveCanvas.y + 250
    e4.visible = true
    e4Stat = "A"
    
    e5.x = moveCanvas.x
    e5.y = moveCanvas.y
    e5.visible = true
    e5Stat = "A"

   

    e6.x = moveCanvas.x + 1250
    e6.y = moveCanvas.y - 75
    e6.visible = true
    e6Stat = "A"

    e7.x = moveCanvas.x - 1250
    e7.y = moveCanvas.y - 20
    e7.visible = true
    e7Stat = "A"

    ob1.x = moveCanvas.x
    ob1.y = moveCanvas.y - 225

    ob2.x = moveCanvas.x
    ob2.y = moveCanvas.y + 225

    ob3.x = moveCanvas.x - 500
    ob3.y = moveCanvas.y 
    ob3.scale = 2

    ob4.x = moveCanvas.x + 500
    ob4.y = moveCanvas.y
    ob4.scale = 2

    bl1.x = moveCanvas.x - 1710
    bl1.y = moveCanvas.y - 150
    bl1.width = 60
    bl1.height = 680

    bl2.x = moveCanvas.x + 1710
    bl2.y = moveCanvas.y - 170
    bl2.width = 60
    bl2.height = 680

    bl3.x = moveCanvas.x
    bl3.y = moveCanvas.y - 465
    bl3.width = 3600
    bl3.height = 60

    bl4.x = moveCanvas.x
    bl4.y = moveCanvas.y + 500
    bl4.width = 3600
    bl4.height = 60

    bl5.x = moveCanvas.x - 1155
    bl5.y = moveCanvas.y - 175
    bl5.width = 570
    bl5.height = 60

    bl6.x = moveCanvas.x - 1410
    bl6.y = moveCanvas.y - 450
    bl6.width = 60
    bl6.height = 570

    bl7.x = moveCanvas.x - 900
    bl7.y = moveCanvas.y - 450
    bl7.width = 60
    bl7.height = 570

    bl8.x = moveCanvas.x + 1200
    bl8.y = moveCanvas.y - 225
    bl8.width = 480
    bl8.height = 60

    bl9.x = moveCanvas.x + 1410
    bl9.y = moveCanvas.y - 480
    bl9.width = 60
    bl9.height = 570

    bl10.x = moveCanvas.x + 940
    bl10.y = moveCanvas.y - 480
    bl10.width = 60
    bl10.height = 570

    bl11.x = moveCanvas.x - 1445
    bl11.y = moveCanvas.y + 165
    bl11.width = 500
    bl11.height = 60

    bl12.x = moveCanvas.x + 1450
    bl12.y = moveCanvas.y + 120
    bl12.width = 500
    bl12.height = 60

    bl13.x = moveCanvas.x - 1225
    bl13.y = moveCanvas.y + 320
    bl13.width = 60
    bl13.height = 350

    bl14.x = moveCanvas.x + 1230
    bl14.y = moveCanvas.y + 320
    bl14.width = 60
    bl14.height = 350

    cg = Math.round(random(1,3))
    if(char === "rr"){
      hp = 3
      //cg = 1
    }
    if(char === "Rr"){
      hp = 6
      //cg = 2
    }
    if(char === "RR"){
      hp = 5
      //cg = 3
    }
  
  }


  if(mousePressedOver(back)&&gs === 0.2&&timeCounter === 0){
    gs = 0
    timeCharge.velocityY = 50
    timeCounter = 1

  }
  if(mousePressedOver(back)&&gs === 0.4&&timeCounter === 0){
    gs = 0.2
    timeCharge.velocityY = 50   
    timeCounter = 1 
    charSel.visible = false
  }

  if(bossStat === "NA"){
    boss.x = 1500
    zone.x = 1500
  }
    
  if(gs === 1){
    g.visible = true
    if(bullet.collide(boss)&&bossStat === "A"&&player.overlap(boss) === false){
      bosshp = bosshp - 1
      bullet.visible = false
      bullet.x = player.x
      bullet.y = player.y
    }


     if(bullet.collide(e1)){
      eh.play()
      bullet.visible = false
      bullet.x = 0
      bullet.y = 0
      e1Stat = "NA"
      e1.x = 1500
      if(e1.x === 1500){
        e = e - 1
      }
      
    }
    if(bullet.collide(e2)){
      eh.play()
      bullet.visible = false
      bullet.x = 0
      bullet.y = 0
      e2Stat = "NA"
      e2.x = 1500
      if(e2.x === 1500){
        e = e - 1
      }
      
    }
    if(bullet.collide(e3)){
      eh.play()
      bullet.visible = false
      bullet.x = 0
      bullet.y = 0
      e3Stat = "NA"
      e3.x = 1500
      if(e3.x === 1500){
        e = e - 1
      }
      
    }
    if(bullet.collide(e4)){
      eh.play()
      bullet.visible = false
      bullet.x = 0
      bullet.y = 0
      e4Stat = "NA"
      e4.x = 1500
      if(e4.x === 1500){
        e = e - 1
      } 
    }
    if(bullet.collide(e5)){
      eh.play()
      bullet.visible = false
      bullet.x = 0
      bullet.y = bullet.y
      e5Stat = "NA"
      e5.x = 1500
      if(e5.x === 1500){
        e = e - 1
      }
    }
    if(bullet.collide(e6)){
      eh.play()
      bullet.visible = false
      bullet.x = 0
      bullet.y = 0
      e6Stat = "NA"
      e6.x = 1500
      if(e6.x === 1500){
        e = e - 1
      }
    }
    if(bullet.collide(e7)){
      eh.play()
      bullet.visible = false
      bullet.x = 0
      bullet.y = 0
      e7Stat = "NA"
      e7.x = 1500
      if(e7.x === 1500){
        e = e - 1
      }
    }
    

    if(keyDown("space")&&bulletCounter === 0){
      st.play()
      bullet.visible = true
      bulletCounter = 1
      bulletCharge.velocityY = 50
      bullet.x = player.x
      bullet.y = player.y
      if(playerDirection === "n"){
        bullet.velocityY = - 10
        bullet.width = 5
        bullet.height = 10
      }
      if(playerDirection === "s"){
        bullet.velocityY = 10
        bullet.width = 5
        bullet.height = 10
      }
      if(playerDirection === "w"){
        bullet.velocityX = - 10
        bullet.width = 10
        bullet.height = 5
      }
      if(playerDirection === "e"){
        bullet.velocityX = 10
        bullet.width = 10
        bullet.height = 5
      }
                 
      
    }

    chest.x = moveCanvas.x - 1560
    chest.y = moveCanvas.y - 350

    player.visible = true
    shadow.visible = true
    retry.visible = true
    hpbar.visible = true
    ob1.visible = true
    ob2.visible = true
    ob3.visible = true
    ob4.visible = true

    if(mousePressedOver(home)){
      bosshpc.visible = false
      bullet.visible = false
      g.visible = false
        chest.visible = false
      zones = 0.25
      shadow.visible = false
      home.visible = false
      hpbar.visible = false
      el.visible = false
      e = 7
      elt.visible = false
      bosshp = 10
      bosshpc.visible = false
      retry.visible = false
      gs = 0
      player.visible = false
      moveCanvas.visible = false
      e1.visible = false
      e2.visible = false
      e3.visible = false
      e4.visible = false
      e5.visible = false
      e6.visible = false
      e7.visible = false
      ob1.visible = false
      ob2.visible = false
      ob3.visible = false
      ob4.visible = false
      e1Bullet.visible = false
      e2Bullet.visible = false
      e3Bullet.visible = false
      e4Bullet.visible = false
      e5Bullet.visible = false
      e6Bullet.visible = false
      e7Bullet.visible = false
      e1Stat = "NA"
      e2Stat = "NA"
      e3Stat = "NA"
      e4Stat = "NA"
      e5Stat = "NA"
      e6Stat = "NA"
      e7Stat = "NA"
      boss.visible = false
      bossStat = "NA"

      cc.play()
    player.x = 500
    player.y = 300
    hp = starthp
    moveCanvas.x = -1050
    moveCanvas.y = 550
    playerDirection = "s"
    e = 7
    if(char === "rr"){
      hp = 3
    }
    if(char === "Rr"){
      hp = 6
    }
    if(char === "RR"){
      hp = 4
    }
    e1.x = moveCanvas.x + 500
    e1.y = moveCanvas.y - 250

    e2.x = moveCanvas.x - 500
    e2.y = moveCanvas.y - 250
   
    
    e3.x = moveCanvas.x + 500
    e3.y = moveCanvas.y + 250
   

    e4.x = moveCanvas.x - 500
    e4.y = moveCanvas.y + 250
   
    e5.x = moveCanvas.x
    e5.y = moveCanvas.y
   

   

    e6.x = moveCanvas.x + 1250
    e6.y = moveCanvas.y - 75
   

    e7.x = moveCanvas.x - 1250
    e7.y = moveCanvas.y - 20

    }

    if(mousePressedOver(retry)){
      g.visible = true
        chest.visible = true
      zones = 0.25
    cc.play()
    player.x = 500
    player.y = 300
    hp = starthp
    moveCanvas.x = -1050
    moveCanvas.y = 550
    playerDirection = "s"
    e = 7
    if(char === "rr"){
      hp = 3
    }
    if(char === "Rr"){
      hp = 6
    }
    if(char === "RR"){
      hp = 4
    }
    e1.x = moveCanvas.x + 500
    e1.y = moveCanvas.y - 250
    e1.visible = true
    e1Stat = "A"

    e2.x = moveCanvas.x - 500
    e2.y = moveCanvas.y - 250
    e2.visible = true
    e2Stat = "A"
    
    e3.x = moveCanvas.x + 500
    e3.y = moveCanvas.y + 250
    e3.visible = true
    e3Stat = "A"

    e4.x = moveCanvas.x - 500
    e4.y = moveCanvas.y + 250
    e4.visible = true
    e4Stat = "A"
    
    e5.x = moveCanvas.x
    e5.y = moveCanvas.y
    e5.visible = true
    e5Stat = "A"

   

    e6.x = moveCanvas.x + 1250
    e6.y = moveCanvas.y - 75
    e6.visible = true
    e6Stat = "A"

    e7.x = moveCanvas.x - 1250
    e7.y = moveCanvas.y - 20
    e7.visible = true
    e7Stat = "A"
    }

    ob1.x = moveCanvas.x
    ob1.y = moveCanvas.y - 225

    ob2.x = moveCanvas.x
    ob2.y = moveCanvas.y + 225

    ob3.x = moveCanvas.x - 500
    ob3.y = moveCanvas.y 
    ob3.scale = 2

    ob4.x = moveCanvas.x + 500
    ob4.y = moveCanvas.y
    ob4.scale = 2

    bl1.x = moveCanvas.x - 1710
    bl1.y = moveCanvas.y - 150
    bl1.width = 60
    bl1.height = 680

    bl2.x = moveCanvas.x + 1710
    bl2.y = moveCanvas.y - 170
    bl2.width = 60
    bl2.height = 680

    bl3.x = moveCanvas.x
    bl3.y = moveCanvas.y - 465
    bl3.width = 3600
    bl3.height = 60

    bl4.x = moveCanvas.x
    bl4.y = moveCanvas.y + 500
    bl4.width = 3600
    bl4.height = 60

    bl5.x = moveCanvas.x - 1155
    bl5.y = moveCanvas.y - 175
    bl5.width = 570
    bl5.height = 60

    bl6.x = moveCanvas.x - 1410
    bl6.y = moveCanvas.y - 450
    bl6.width = 60
    bl6.height = 570

    bl7.x = moveCanvas.x - 900
    bl7.y = moveCanvas.y - 450
    bl7.width = 60
    bl7.height = 570

    bl8.x = moveCanvas.x + 1200
    bl8.y = moveCanvas.y - 225
    bl8.width = 480
    bl8.height = 60

    bl9.x = moveCanvas.x + 1410
    bl9.y = moveCanvas.y - 480
    bl9.width = 60
    bl9.height = 570

    bl10.x = moveCanvas.x + 940
    bl10.y = moveCanvas.y - 480
    bl10.width = 60
    bl10.height = 570

    bl11.x = moveCanvas.x - 1445
    bl11.y = moveCanvas.y + 165
    bl11.width = 500
    bl11.height = 60

    bl12.x = moveCanvas.x + 1450
    bl12.y = moveCanvas.y + 120
    bl12.width = 500
    bl12.height = 60

    bl13.x = moveCanvas.x - 1225
    bl13.y = moveCanvas.y + 320
    bl13.width = 60
    bl13.height = 350

    bl14.x = moveCanvas.x + 1230
    bl14.y = moveCanvas.y + 320
    bl14.width = 60
    bl14.height = 350

    

    if(e1D === 1){
      e1.addImage(e1n)
      e1P.x = e1.x
      e1P.y = e1.y - 90
      e1P.width = 35
      e1P.height = 250
      e1Bullet.velocityY = -10
      e1Bullet.velocityX = 0
      e1Bullet.width = 5
      e1Bullet.height = 10
    }
    if(e1D === 3){
      e1.addImage(e1s)
      e1P.x = e1.x
      e1P.y = e1.y + 90
      e1P.width = 35
      e1P.height = 250
      e1Bullet.velocityY = 10
      e1Bullet.velocityX = 0
      e1Bullet.width = 5
      e1Bullet.height = 10
    }
    if(e1D === 4){
      e1.addImage(e1w)
      e1P.x = e1.x - 90
      e1P.y = e1.y 
      e1P.width = 250
      e1P.height = 35
      e1Bullet.velocityX = -10
      e1Bullet.velocityY = 0
      e1Bullet.width = 10
      e1Bullet.height = 5
    }
    if(e1D === 2){
      e1.addImage(e1e)

      e1P.x = e1.x + 90
      e1P.y = e1.y 
      e1P.width = 250
      e1P.height = 35
      e1Bullet.velocityX = 10
      e1Bullet.velocityY = 0
      e1Bullet.width = 10
      e1Bullet.height = 5
    }

    if(e2D === 1){
      e2.addImage(e1n)
      e2P.x = e2.x
      e2P.y = e2.y - 90
      e2P.width = 35
      e2P.height = 250
      e2Bullet.velocityY = -10
      e2Bullet.velocityX = 0
      e2Bullet.width = 5
      e2Bullet.height = 10
    }
    if(e2D === 3){
      e2.addImage(e1s)
      e2P.x = e2.x
      e2P.y = e2.y + 90
      e2P.width = 35
      e2P.height = 250
      e2Bullet.velocityY = 10
      e2Bullet.velocityX = 0
      e2Bullet.width = 5
      e2Bullet.height = 10
    }
    if(e2D === 4){
      e2.addImage(e1w)
      e2P.x = e2.x - 90
      e2P.y = e2.y 
      e2P.width = 250
      e2P.height = 35
      e2Bullet.velocityX = -10
      e2Bullet.velocityY = 0
      e2Bullet.width = 10
      e2Bullet.height = 5
    }
    if(e2D === 2){
      e2.addImage(e1e)
      e2P.x = e2.x + 90
      e2P.y = e2.y 
      e2P.width = 250
      e2P.height = 35
      e2Bullet.velocityX = 10
      e2Bullet.velocityY = 0
      e2Bullet.width = 10
      e2Bullet.height = 5
    }

    if(e3D === 1){
      e3.addImage(e1n)
      e3P.x = e3.x
      e3P.y = e3.y - 90
      e3P.width = 35
      e3P.height = 250
      e3Bullet.velocityY = -10
      e3Bullet.velocityX = 0
      e3Bullet.width = 5
      e3Bullet.height = 10
    }
    if(e3D === 3){
      e3.addImage(e1s)
      e3P.x = e3.x
      e3P.y = e3.y + 90
      e3P.width = 35
      e3P.height = 250
      e3Bullet.velocityY = 10
      e3Bullet.velocityX = 0
      e3Bullet.width = 5
      e3Bullet.height = 10
    }
    if(e3D === 4){
      e3.addImage(e1w)
      e3P.x = e3.x - 90
      e3P.y = e3.y 
      e3P.width = 250
      e3P.height = 35
      e3Bullet.velocityX = -10
      e3Bullet.velocityY = 0
      e3Bullet.width = 10
      e3Bullet.height = 5
    }
    if(e3D === 2){
      e3.addImage(e1e)
      e3P.x = e3.x + 90
      e3P.y = e3.y 
      e3P.width = 250
      e3P.height = 35
      e3Bullet.velocityX = 10
      e3Bullet.velocityY = 0
      e3Bullet.width = 10
      e3Bullet.height = 5
    }

    //
    if(e4D === 1){
      e4.addImage(e1n)
      e4P.x = e4.x
      e4P.y = e4.y - 90
      e4P.width = 35
      e4P.height = 250
      e4Bullet.velocityY = -10
      e4Bullet.velocityX = 0
      e4Bullet.width = 5
      e4Bullet.height = 10
    }
    if(e4D === 3){
      e4.addImage(e1s)
      e4P.x = e4.x
      e4P.y = e4.y + 90
      e4P.width = 35
      e4P.height = 250
      e4Bullet.velocityY = 10
      e4Bullet.velocityX = 0
      e4Bullet.width = 5
      e4Bullet.height = 10
    }
    if(e4D === 4){
      e4.addImage(e1w)
      e4P.x = e4.x - 90
      e4P.y = e4.y 
      e4P.width = 250
      e4P.height = 35
      e4Bullet.velocityX = -10
      e4Bullet.velocityY = 0
      e4Bullet.width = 10
      e4Bullet.height = 5
    }
    if(e4D === 2){
      e4.addImage(e1e)
      e4P.x = e4.x + 90
      e4P.y = e4.y 
      e4P.width = 250
      e4P.height = 35
      e4Bullet.velocityX = 10
      e4Bullet.velocityY = 0
      e4Bullet.width = 10
      e4Bullet.height = 5
    }

    //
    if(e5D === 1){
      e5.addImage(e1n)
      e5P.x = e5.x
      e5P.y = e5.y - 90
      e5P.width = 35
      e5P.height = 250
      e5Bullet.velocityY = -10
      e5Bullet.velocityX = 0
      e5Bullet.width = 5
      e5Bullet.height = 10
    }
    if(e5D === 3){
      e5.addImage(e1s)
      e5P.x = e5.x
      e5P.y = e5.y + 90
      e5P.width = 35
      e5P.height = 250
      e5Bullet.velocityY = 10
      e5Bullet.velocityX = 0
      e5Bullet.width = 5
      e5Bullet.height = 10
    }
    if(e5D === 4){
      e5.addImage(e1w)
      e5P.x = e5.x - 90
      e5P.y = e5.y 
      e5P.width = 250
      e5P.height = 35
      e5Bullet.velocityX = -10
      e5Bullet.velocityY = 0
      e5Bullet.width = 10
      e5Bullet.height = 5
    }
    if(e5D === 2){
      e5.addImage(e1e)
      e5P.x = e5.x + 90
      e5P.y = e5.y 
      e5P.width = 250
      e5P.height = 35
      e5Bullet.velocityX = 10
      e5Bullet.velocityY = 0
      e5Bullet.width = 10
      e5Bullet.height = 5
    }

    if(e6D === 1){
      e6.addImage(e1n)
      e6P.x = e6.x
      e6P.y = e6.y - 90
      e6P.width = 35
      e6P.height = 250
      e6Bullet.velocityY = -10
      e6Bullet.velocityX = 0
      e6Bullet.width = 5
      e6Bullet.height = 10
    }
    if(e6D === 3){
      e6.addImage(e1s)
      e6P.x = e6.x
      e6P.y = e6.y + 90
      e6P.width = 35
      e6P.height = 250
      e6Bullet.velocityY = 10
      e6Bullet.velocityX = 0
      e6Bullet.width = 5
      e6Bullet.height = 10
    }
    if(e6D === 4){
      e6.addImage(e1w)
      e6P.x = e6.x - 90
      e6P.y = e6.y 
      e6P.width = 250
      e6P.height = 35
      e6Bullet.velocityX = -10
      e6Bullet.velocityY = 0
      e6Bullet.width = 10
      e6Bullet.height = 5
    }
    if(e6D === 2){
      e6.addImage(e1e)
      e6P.x = e6.x + 90
      e6P.y = e6.y 
      e6P.width = 250
      e6P.height = 35
      e6Bullet.velocityX = 10
      e6Bullet.velocityY = 0
      e6Bullet.width = 10
      e6Bullet.height = 5
    }

    if(e7D === 1){
      e7.addImage(e1n)
      e7P.x = e7.x
      e7P.y = e7.y - 90
      e7P.width = 35
      e7P.height = 250
      e7Bullet.velocityY = -10
      e7Bullet.velocityX = 0
      e7Bullet.width = 5
      e7Bullet.height = 10
    }
    if(e7D === 3){
      e7.addImage(e1s)
      e7P.x = e7.x
      e7P.y = e7.y + 90
      e7P.width = 35
      e7P.height = 250
      e7Bullet.velocityY = 10
      e7Bullet.velocityX = 0
      e7Bullet.width = 5
      e7Bullet.height = 10
    }
    if(e7D === 4){
      e7.addImage(e1w)
      e7P.x = e7.x - 90
      e7P.y = e7.y 
      e7P.width = 250
      e7P.height = 35
      e7Bullet.velocityX = -10
      e7Bullet.velocityY = 0
      e7Bullet.width = 10
      e7Bullet.height = 5
    }
    if(e7D === 2){
      e7.addImage(e1e)
      e7P.x = e7.x + 90
      e7P.y = e7.y 
      e7P.width = 250
      e7P.height = 35
      e7Bullet.velocityX = 10
      e7Bullet.velocityY = 0
      e7Bullet.width = 10
      e7Bullet.height = 5
    }

    if(bossD === 1){
      boss.addImage(bossnImg)
      bossb1.width = 10
      bossb1.height = 20
      bossb2.width = 10
      bossb2.height = 20
      bossb3.width = 10
      bossb3.height = 20
      bossb1.velocityY = -15
    }
    if(bossD === 3){
      boss.addImage(bosssImg)
      bossb1.width = 10
      bossb1.height = 20
      bossb2.width = 10
      bossb2.height = 20
      bossb3.width = 10
      bossb3.height = 20
      bossb1.velocityY = 15
    }
    if(bossD === 2){
      boss.addImage(bosseImg)
      bossb1.width = 20
      bossb1.height = 10
      bossb2.width = 20
      bossb2.height = 10
      bossb3.width = 20
      bossb3.height = 10
      bossb1.velocityX = 15
    }
    if(bossD === 4){
      boss.addImage(bosswImg)
      bossb1.width = 20
      bossb1.height = 10
      bossb2.width = 20
      bossb2.height = 10
      bossb3.width = 20
      bossb3.height = 10
      bossb1.velocityX = -15
    }


    ob1.scale = 1.5
    ob2.scale = 1.5
    ob3.scale = 3
    ob4.scale = 3

    
  }

  shadow.x =  player.x
  shadow.y = player.y

  if(e1Charge.y > 600){
    e1Charge.y = 0
    e1D  = e1D + 1
    e1Bullet.x = e1.x
    e1Bullet.y = e1.y
    }
  if(e1D > 4){
    e1D = 1
  }

  if(player.overlap(e1P)){
    e1Stat = "A"
  }

  if(e2Charge.y > 600){
    e2Charge.y = 0
    e2D  = e2D + 1
    e2Bullet.x = e2.x
    e2Bullet.y = e2.y
  }
  if(e2D === 5){
    e2D = 1

  }

  if(player.overlap(e2P)){
    e2Stat = "A"
  }

  if(e3Charge.y > 600){
    e3Charge.y = 0
    e3D  = e3D + 1
    e3Bullet.x = e3.x
    e3Bullet.y = e3.y
  }
  if(e3D === 5){
    e3D = 1
  }

  if(player.overlap(e3P)){
    e3Stat = "A"
  }

  if(e4Charge.y > 600){
    e4Charge.y = 0
    e4D  = e4D + 1
    e4Bullet.x = e4.x
    e4Bullet.y = e4.y
  }
  if(e4D === 5){
    e4D = 0
  }

  if(player.overlap(e4P)){
    e4Stat = "A"
  }

  if(e5Charge.y > 600){
    e5Charge.y = 0
    e5D  = e5D + 1
    e5Bullet.x = e5.x
    e5Bullet.y = e5.y
  }
  if(e5D === 5){
    e5D = 0
  }

  if(player.overlap(e5P)){
    e5Stat = "A"
  }

  if(e6Charge.y > 600){
    e6Charge.y = 0
    e6D  = e6D + 1
    e6Bullet.x = e6.x
    e6Bullet.y = e6.y
  }
  if(e6D === 5){
    e6D = 0
  }

  if(player.overlap(e6P)){
    e6Stat = "A"
  }

  if(e7Charge.y > 600){
    e7Charge.y = 0
    e7D  = e7D + 1
    e7Bullet.x = e7.x
    e7Bullet.y = e7.y
  }
  if(e7D === 5){
    e7D = 0
  }

  if(player.overlap(e7P)){
    e7Stat = "A"
  }

  if(bosshp < 1){
    bh.visible = false
    bossStat = "NA"
    boss.x = 1500
    zone.x = 1500
    bosshpc.visible = false
    if(player.overlap(chest)){
      gs = 2
      menu.visible = true
      hpbar.visible = false
      retry.visible = false
      gf.visible = true
      home.x = 500
      home.y = 525
      if(mousePressedOver(home)){
        bosshpc.visible = false
        bullet.visible = false
        g.visible = false
        chest.visible = false
        zones = 0.25
        menu.visible = false
        gf.visible = false
        home.scale = 0.5
        retry.scale = 0.5
        home.x = 890
        home.y = 70
        retry.x = 110
        retry.y = 70
        wasted.visible = false
        cc.play()
        shadow.visible = false
        home.visible = false
        hpbar.visible = false
        el.visible = false
        e = 7
        elt.visible = false
        bosshp = 10
        bosshpc.visible = false
        retry.visible = false
        gs = 0
        player.visible = false
        moveCanvas.visible = false
        e1.visible = false
        e2.visible = false
        e3.visible = false
        e4.visible = false
        e5.visible = false
        e6.visible = false
        e7.visible = false
        ob1.visible = false
        ob2.visible = false
        ob3.visible = false
        ob4.visible = false
        e1Bullet.visible = false
        e2Bullet.visible = false
        e3Bullet.visible = false
        e4Bullet.visible = false
        e5Bullet.visible = false
        e6Bullet.visible = false
        e7Bullet.visible = false
        e1Stat = "NA"
        e2Stat = "NA"
        e3Stat = "NA"
        e4Stat = "NA"
        e5Stat = "NA"
        e6Stat = "NA"
        e7Stat = "NA"
        boss.visible = false
        bossStat = "NA"
  
        cc.play()
      player.x = 500
      player.y = 300
      hp = starthp
      moveCanvas.x = -1050
      moveCanvas.y = 550
      playerDirection = "s"
      e = 7
      if(char === "rr"){
        hp = 3
      }
      if(char === "Rr"){
        hp = 6
      }
      if(char === "RR"){
        hp = 4
      }
      e1.x = moveCanvas.x + 500
      e1.y = moveCanvas.y - 250
  
      e2.x = moveCanvas.x - 500
      e2.y = moveCanvas.y - 250
     
      
      e3.x = moveCanvas.x + 500
      e3.y = moveCanvas.y + 250
     
  
      e4.x = moveCanvas.x - 500
      e4.y = moveCanvas.y + 250
     
      e5.x = moveCanvas.x
      e5.y = moveCanvas.y
       
  
      e6.x = moveCanvas.x + 1250
      e6.y = moveCanvas.y - 75
     
  
      e7.x = moveCanvas.x - 1250
      e7.y = moveCanvas.y - 20
      }
    }    
  }

  if(gs === 1){
    home.visible = true
    e1Bullet.visible = true
    e2Bullet.visible = true
    e3Bullet.visible = true
    e4Bullet.visible = true
    e5Bullet.visible = true
    e6Bullet.visible = true
    e7Bullet.visible = true
  }
  else{
    e1Bullet.visible = false
    e2Bullet.visible = false
    e3Bullet.visible = false
    e4Bullet.visible = false
    e5Bullet.visible = false
    e6Bullet.visible = false
    e7Bullet.visible = false
  }


  if(bossStat === "A"){
  bosshpc.visible = true
  bosshpc.width = bosshp*50
  if(bossCharge.y>200){
    bossb2.visible = true
    if(bossD === 1){
      bossb2.velocityY = -20
      bossb2.velocityX = 0
    }
    if(bossD === 3){
      bossb2.velocityY = 20
      bossb2.velocityX = 0
    }
    if(bossD === 2){
      bossb2.velocityY = 0
      bossb2.velocityX = 20
    }
    if(bossD === 4){
      bossb2.velocityY = 0
      bossb2.velocityX = -20
    }
  }
  if(bossCharge.y>400){
    bossb3.visible = true
    if(bossD === 1){
      bossb3.velocityY = -20
      bossb3.velocityX = 0
    }
    if(bossD === 3){
      bossb3.velocityY = 20
      bossb3.velocityX = 0
    }
    if(bossD === 2){
      bossb3.velocityY = 0
      bossb3.velocityX = 20
    }
    if(bossD === 4){
      bossb3.velocityY = 0
      bossb3.velocityX = -20
    }
  }
  if(bossCharge.y>600){
    bossb1.visible = true
    bossb2.visible = false
    bossb3.visible = false
    zones = zones + 0.1
    bossCharge.y = 0
    bossD = bossD + 1
    bossb1.x = boss.x
    bossb1.y = boss.y
    bossb2.x = boss.x
    bossb2.y = boss.y
    bossb3.x = boss.x
    bossb3.y = boss.y
    bossb1.velocityX = 0
    bossb1.velocityY = 0
    bossb2.velocityX = 0
    bossb2.velocityY = 0
    bossb3.velocityX = 0
    bossb3.velocityY = 0
    bossCounter = bossCounter + 1
    if(bossD === 1){
      bossb1.velocityY = -20
      bossb1.velocityX = 0
    }
    if(bossD === 3){
      bossb1.velocityY = 20
      bossb1.velocityX = 0
    }
    if(bossD === 2){
      bossb1.velocityY = 0
      bossb1.velocityX = 20
    }
    if(bossD === 4){
      bossb1.velocityY = 0
      bossb1.velocityX = -20
    }
    if(bossCounter === 2){
      bossCounter = 0
      bossb1.x = boss.x
      bossb1.y = boss.y
      bossb2.x = boss.x
      bossb2.y = boss.y
      bossb3.x = boss.x
      bossb3.y = boss.y
    }
  }
}

  if(bossD > 4){
    bossD = 1
  }
  
  e1Charge.velocityY = 15
  e2Charge.velocityY = 15
  e3Charge.velocityY = 15
  e4Charge.velocityY = 15
  e5Charge.velocityY = 15
  e6Charge.velocityY = 15
  e7Charge.velocityY = 15
  if(bossStat === "A"){
  bossCharge.velocityY = 15
  }

  movement();
  bg();
  postion(); 
  textfun();
    
  //console.log("moveCanvas"+moveCanvas.x,moveCanvas.y);
  //console.log("player"+player.x,player.y);
  console.log(cg,char)
  
  drawSprites();
}

function bg() {
  if(gs === 0||gs === 0.2||gs === 0.4){
    background(bg1);  
  }
  if(gs === 1){
    background("black");
    moveCanvas.addImage(stg1)  
  }
}

function textfun() {
  if(gs === 0){
    fill("white")
    textSize(60)
    text("𝙷𝚢𝚋𝚛𝚒𝚍 𝙷𝚊𝚣𝚊𝚛𝚍",270,200)
  }
  if(gs === 0.2){
    fill("white")
    textSize(60)
    text("𝙸𝚗𝚜𝚝𝚛𝚞𝚌𝚝𝚒𝚘𝚗𝚜:",300,50)
    fill("white")
    textSize(20)
    text("𝙸)𝚃𝚑𝚎𝚛𝚎 𝚒𝚜 𝚊 𝚐𝚊𝚖𝚎𝚝𝚎 𝚒𝚗 𝚝𝚑𝚎 𝚌𝚑𝚎𝚜𝚝 𝚠𝚑𝚒𝚌𝚑 𝚢𝚘𝚞 𝚑𝚊𝚟𝚎 𝚝𝚘 𝚛𝚎𝚊𝚌𝚑.",50,120)
    text("𝙸𝙸)𝚃𝚘 𝚘𝚙𝚎𝚗 𝚝𝚑𝚎 𝚌𝚑𝚎𝚜𝚝 𝚢𝚘𝚞 𝚑𝚊𝚟𝚎 𝚝𝚘 𝚔𝚒𝚕𝚕 𝚊𝚕𝚕 𝚝𝚑𝚎 𝚎𝚗𝚎𝚖𝚒𝚎𝚜.",50,170)
    text("𝙸𝙸𝙸)𝚈𝚘𝚞 𝚠𝚒𝚕𝚕 𝚋𝚎 𝚊𝚕𝚕𝚘𝚠𝚎𝚍 𝚝𝚘 𝚌𝚑𝚘𝚘𝚜𝚎 𝚊 𝚌𝚑𝚊𝚛𝚊𝚌𝚝𝚎𝚛 𝚠𝚒𝚝𝚑 𝚍𝚒𝚏𝚏𝚎𝚛𝚎𝚗𝚝 𝚜𝚝𝚊𝚝𝚜.",50,220)
    text("𝙸𝚅)𝙰𝚕𝚕 𝚝𝚑𝚎 𝚌𝚑𝚊𝚛𝚊𝚌𝚝𝚎𝚛𝚜 𝚑𝚊𝚟𝚎 𝚍𝚒𝚏𝚏𝚎𝚛𝚗𝚎𝚝 𝚐𝚊𝚖𝚎𝚝𝚎𝚜.",50,270)
    text("𝚅)𝚄𝚜𝚎 𝚊𝚛𝚛𝚘𝚠 𝚔𝚎𝚢𝚜 𝚝𝚘 𝚖𝚘𝚟𝚎 𝚊𝚗𝚍 𝚜𝚙𝚊𝚌𝚎 𝚋𝚊𝚛 𝚝𝚘 𝚜𝚑𝚘𝚘𝚝.",50,320)
    textSize(40)
    text("𝙰𝚗𝚍 𝙳𝚘𝚗'𝚝 𝙳𝚒𝚎",400,400)
    text("𝙶𝚘𝚘𝚍 𝙻𝚞𝚌𝚔!",420,490)
    
  }
  if(gs === 0.4){
    fill("white")
    textSize(60)
    text("𝙲𝚑𝚊𝚛𝚊𝚌𝚝𝚎𝚛𝚜:",370,50)
    fill("white")
    textSize(40)
    text("𝙸)",200,170)
    text("𝙸𝙸)",180,290)
    text("𝙸𝙸𝙸)",160,410)
  }
  if(gs === 0.6){
    fill("white")
    textSize(60)
    text("stupid",370,50)
    fill("white")
    textSize(40)
    text("1)",100,120)
    text("2)",100,220)
    text("3)",100,320)
  }
  

}

function movement(params) {
  if(gs === 1){  
    var n = false,s = false,w = false,e = false 

    if(playerDirection === "n"){
      if(char === "rr"){
        player.addImage(pnImg) 
        }
        if(char === "Rr"){
          player.addImage(pnrImg) 
        }
        if(char === "RR"){
          player.addImage(pnRImg) 
        }
    }
    if(playerDirection === "s"){
      if(char === "rr"){
        player.addImage(psImg) 
        }
        if(char === "Rr"){
          player.addImage(psrImg) 
        }
        if(char === "RR"){
          player.addImage(psRImg) 
        }
    }
    if(playerDirection === "e"){
      if(char === "rr"){
        player.addImage(peImg) 
        }
        if(char === "Rr"){
          player.addImage(perImg) 
        }
        if(char === "RR"){
          player.addImage(peRImg) 
        }
    }
    if(playerDirection === "w"){
      if(char === "rr"){
        player.addImage(pwImg) 
        }
        if(char === "Rr"){
          player.addImage(pwrImg) 
        }
        if(char === "RR"){
          player.addImage(pwRImg) 
        }
    }
  

    if(keyDown("up")&& s === false && w === false && e === false){
      player.setCollider("rectangle",0,0,65,110)

    moveCanvas.y = moveCanvas.y + speed
    e1Bullet.y = e1Bullet.y + speed
    e2Bullet.y = e2Bullet.y + speed
    e3Bullet.y = e3Bullet.y + speed
    e4Bullet.y = e4Bullet.y + speed
    e5Bullet.y = e5Bullet.y + speed
    e6Bullet.y = e6Bullet.y + speed
    e7Bullet.y = e7Bullet.y + speed

    bossb1.y = bossb1.y + speed    
    bossb2.y = bossb2.y + speed
    bossb3.y = bossb3.y + speed  
    playerDirection = "n"
    n = true
  }
  else{
    n = false
  }
  if(keyDown("down")&& n === false && w === false && e === false){
    player.setCollider("rectangle",0,0,65,110)
   
    moveCanvas.y = moveCanvas.y - speed
    e1Bullet.y = e1Bullet.y - speed
    e2Bullet.y = e2Bullet.y - speed
    e3Bullet.y = e3Bullet.y - speed
    e4Bullet.y = e4Bullet.y - speed
    e5Bullet.y = e5Bullet.y - speed
    e6Bullet.y = e6Bullet.y - speed
    e1Bullet.y = e7Bullet.y - speed
    bossb1.y = bossb1.y - speed    
    bossb2.y = bossb2.y - speed
    bossb3.y = bossb3.y - speed 
    playerDirection = "s"
    s = true
  }
  else{
    s = false
  }
  if(keyDown("right")&& s === false && w === false && n === false){
    player.setCollider("rectangle",0,0,110,65)
    
    moveCanvas.x = moveCanvas.x - speed
    e1Bullet.x = e1Bullet.x - speed
    e2Bullet.x = e2Bullet.x - speed
    e3Bullet.x = e3Bullet.x - speed
    e4Bullet.x = e4Bullet.x - speed
    e5Bullet.x = e5Bullet.x - speed
    e6Bullet.x = e6Bullet.x - speed
    e7Bullet.x = e7Bullet.x - speed
    bossb1.x = bossb1.x - speed    
    bossb2.x = bossb2.x - speed
    bossb3.x = bossb3.x - speed 
    playerDirection = "e"
    e = true
  }
  else{
    e = false
  }
  if(keyDown("left")&& s === false && n === false && e === false){
    player.setCollider("rectangle",0,0,110,65)

    
    moveCanvas.x = moveCanvas.x + speed
    e1Bullet.x = e1Bullet.x + speed
    e2Bullet.x = e2Bullet.x + speed
    e3Bullet.x = e3Bullet.x + speed
    e4Bullet.x = e4Bullet.x + speed
    e5Bullet.x = e5Bullet.x + speed
    e6Bullet.x = e6Bullet.x + speed
    e7Bullet.x = e7Bullet.x + speed
    bossb1.x = bossb1.x + speed    
    bossb2.x = bossb2.x + speed
    bossb3.x = bossb3.x + speed 
    playerDirection = "w"
    w = true

  } 
  else{
    w = false
  }
  }
}


function postion(){

  

}
