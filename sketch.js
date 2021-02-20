const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var task = 1;

var pc;
var pcImg, pcUpImg,pcUpWalk, pcDownImg,pcDownWalk, pcRightImg,pcRightWalk, pcLeftImg,pcLeftWalk;

var wall1, wall2, wall3, prisonBed1, prisonBed2, invisWall;
var floor1, floor2, floor3, floor4, floor5, floor6;
var floorImg, prisonBedImg, wallImg;

var key, keyImg;
var prisonMate, prisonMateImg;
var prisonGate1, prisonGate2, pgCloseImg, pgOpenImg;
var inviWall;
var button;

var door;


function preload(){

	pcImg = loadAnimation("PCwalkingImages/PC.png");

	pcUpWalk = loadAnimation("PCwalkingImages/PCwalkingU1.png","PCwalkingImages/PCwalkingU2.png",
	"PCwalkingImages/PCwalkingU3.png");
	pcUpImg = loadImage("PCwalkingImages/PCwalkingU2.png");

	pcDownWalk = loadAnimation("PCwalkingImages/PCwalkingD1.png","PCwalkingImages/PCwalkingD2.png",
	"PCwalkingImages/PCwalkingD3.png");
	pcDownImg = loadImage("PCwalkingImages/PCwalkingD2.png");

	pcRightWalk = loadAnimation("PCwalkingImages/PCwalkingR1.png","PCwalkingImages/PCwalkingR2.png",
	"PCwalkingImages/PCwalkingR3.png");
	pcRightImg = loadImage("PCwalkingImages/PCwalkingR2.png");

	pcLeftWalk = loadAnimation("PCwalkingImages/PCwalkingL1.png","PCwalkingImages/PCwalkingL2.png",
	"PCwalkingImages/PCwalkingL3.png");
	pcLeftImg = loadImage("PCwalkingImages/PCwalkingL2.png");

	prisonBedImg = loadImage("PrisonImages/prisonBed.png");
	wallImg = loadImage("PrisonImages/prisonWall.jpg");
	floorImg = loadImage("PrisonImages/prisonFloor2.png");
	keyImg = loadImage("PrisonImages/prisonKey.png");
	prisonMateImg = loadImage("PrisonImages/PrisonMate.png");
	pgCloseImg = loadImage("PrisonImages/prisonGateClose.png");
	pgOpenImg = loadImage("PrisonImages/prisonGateOpen.png");

}

function setup() {
	createCanvas(1000,500);
	engine = Engine.create();
	world = engine.world;

	

	for(var i = 30; i < 1000; i= i + 60){
		wall1 = createSprite(i,20,60,40);
		wall1.addImage(wallImg);
		wall1.scale = 0.1;
		wall2 = createSprite(i,62,60,40);
		wall2.addImage(wallImg);
		wall2.scale = 0.1;
		wall3 = createSprite(i,104,60,40);
		wall3.addImage(wallImg);
		wall3.scale = 0.1;
	}

	for(var i = 30; i < 1000; i= i + 60){
		floor1 = createSprite(i,157,60,40);
		floor1.addImage(floorImg);
		floor1.scale = 0.23;
		floor2 = createSprite(i,220,60,40);
		floor2.addImage(floorImg);
		floor2.scale = 0.23;
		floor3 = createSprite(i,283,60,40);
		floor3.addImage(floorImg);
		floor3.scale = 0.23;
		floor4 = createSprite(i,346,60,40);
		floor4.addImage(floorImg);
		floor4.scale = 0.23;
		floor5 = createSprite(i,409,60,40);
		floor5.addImage(floorImg);
		floor5.scale = 0.23;
		floor6 = createSprite(i,472,60,40);
		floor6.addImage(floorImg);
		floor6.scale = 0.23;
	}

	//prisonGate1 = createSprite(230,210,40,40);
	//prisonGate1.addImage(pgCloseImg);
	//prisonGate1.scale = 0.09;

	prisonMate = createSprite(200,180,80,30);
	prisonMate.addImage(prisonMateImg);
	prisonMate.scale = 0.2;

	for(var i = 30; i < 300; i= i + 60){
		wall1 = createSprite(i,220,60,40);
		wall1.addImage(wallImg);
		wall1.scale = 0.1;
		wall2 = createSprite(i,262,60,40);
		wall2.addImage(wallImg);
		wall2.scale = 0.1;
		wall3 = createSprite(i,304,60,40);
		wall3.addImage(wallImg);
		wall3.scale = 0.1;
	}

	key = createSprite(60,330,50,50);
	key.addImage(keyImg);

	prisonBed1 = createSprite(65,115,100,50);
	prisonBed1.addImage(prisonBedImg);
	prisonBed1.scale = 0.45;

	prisonBed2 = createSprite(65,315,100,50);
	prisonBed2.addImage(prisonBedImg);
	prisonBed2.scale = 0.45;

	pc = createSprite(200,450,40,40);
	pc.addAnimation("standing",pcImg);
	pc.addAnimation("upwalk",pcUpWalk);
	pc.addAnimation("downwalk",pcDownWalk);
	pc.addAnimation("rightwalk",pcRightWalk);
	pc.addAnimation("leftwalk",pcLeftWalk);

	pc.addAnimation("up",pcUpImg)
	pc.addAnimation("down",pcDownImg)
	pc.addAnimation("right",pcRightImg)
	pc.addAnimation("left",pcLeftImg)

	pc.scale = 0.2;

	inviWall = createSprite(110,110,410,255);
	inviWall.visible = false;

	button = createSprite(900,400,70,70);

	door = createSprite(310,370,10,290);
	door.shapeColor = "black"
	
	Engine.run(engine);
}


function draw() {
	rectMode(CENTER);
  	background(200,200,200);

	  pc.collide(inviWall);
 
	//adding PC functions
	if(keyDown("UP_ARROW")||keyDown("W")){
		pc.y = pc.y-2;
		pc.changeAnimation("upwalk");
		pc.scale = 1;
	}
	else if(keyDown("DOWN_ARROW")||keyDown("S")){
		pc.y = pc.y+2;
		pc.changeAnimation("downwalk");
		pc.scale = 1;
	}
	else if(keyDown("RIGHT_ARROW")||keyDown("D")){
		pc.x = pc.x+2;
		pc.changeAnimation("rightwalk");
		pc.scale = 1;
	}
	else if(keyDown("LEFT_ARROW")||keyDown("A")){
		pc.x = pc.x-2;
		pc.changeAnimation("leftwalk");
		pc.scale = 1;
	}


	if(keyWentUp("UP_ARROW")){
		pc.changeAnimation("up");
		pc.scale = 1;
	}
	else if(keyWentUp("DOWN_ARROW")){
		pc.changeAnimation("down");
		pc.scale = 1;
	}
	else if(keyWentUp("RIGHT_ARROW")){
		pc.changeAnimation("right");
		pc.scale = 1;
	}
	else if(keyWentUp("LEFT_ARROW")){
		pc.changeAnimation("left");
		pc.scale = 1;
	}

	if(pc.isTouching(prisonBed2))
		key.scale = 0.0001;

	if(mousePressedOver(button)){
		console.log("done...");
		door.visible = false;
	}
	if(door.visible === true){
		pc.collide(door);
	}

	//console.log(pc.y);
	//console.log(pc.x);
	console.log(task);

	drawSprites();

	if(pc.isTouching(prisonBed2)&& task === 1){
		textSize(15);
		fill(255);
		text("you have found the key",805,400);
		console.log(key.visible);
		task = 2;
	}

	if(pc.x>280 && pc.y<301 ){
		textSize(15);
		fill(255);
		text("you have traded the key for boltcutter",745,400);
		task = 3;
	}
	
}