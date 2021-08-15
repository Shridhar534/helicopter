
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var helicopterIMG, helicopter, packageSprite,packageIMG;
var packageBody,ground,box1,box2,box3

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2
    //packageSprite.friction=0.2

	helicopter=createSprite(400,200,50,50)
	helicopter.addImage(helicopterIMG)
	                                                                                                                                                                                                                                                            
	//helicopterSprite.scale = 0.6
	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color("GREEN")
 
    rectSprite=createSprite(400,660,150,20)
	rectSprite.shapeColor=color("RED")
    rectSprite.isStatic=true
	rectSprite.friction=1
    
	rectSprite=createSprite(320,610,20,100)
	rectSprite.shapeColor=color("RED")
 
	
    rectSprite=createSprite(480,610,20,100)
	rectSprite.shapeColor=color("RED")

//<------------------------------------------------------------------------------------------------------------>//	
	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	
    //rect1 = Bodies.rectangle(200,200,20,120,{restitution:1,isStatic:true});
    //World.add(world, rect1)
	
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);

	 Engine.run(engine);
	
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  //box1.display()
//  Matter.Body.isStatic(body,isStatic)

  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  // drawSprites();
 
//console.log(world.mouse.position.x,world.mouse.position.y)

  packageSprite.friction=0.2
  
  drawSprites()
}

function keyPressed() 
{ if (keyCode === DOWN_ARROW) {
	 Matter.Body.setStatic(packageBody,false); }
}