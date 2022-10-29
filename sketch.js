var ball;
var groundObj;
var left_side;
var right_side;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1400,670);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
}	
ball=Bodies.circle(200,100,20,ball_options);
World.add(world,ball);


rectMode(CENTER);
ellipseMode(RADIUS);

groundObj = new ground(width/2,670,width,20);
left_side = new ground(1100,600,20,120);
right_side = new ground(1300,600,20,120)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.position.x,ball.position.y,20)

groundObj.display();
left_side.display();
right_side.display();

  drawSprites();
 
}

function keyPressed(){

	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, {x:0,y:0}, {x:90,y:-90});
	}

}



