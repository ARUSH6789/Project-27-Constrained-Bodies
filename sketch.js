
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(350,100,300,30);
	bobobject1= new Bob(250,300);
	bobobject2 = new Bob(300,300);
	bobobject3 = new Bob(350,300);
	bobobject4 = new Bob(400,300);
	bobobject5 = new Bob(450,300);
	
	rope1 = new Rope(bobobject1.body,roof.body,-100,0);
	rope2 = new Rope(bobobject2.body,roof.body,-50,0);
	rope3 = new Rope(bobobject3.body,roof.body, 0,0);
	rope4 = new Rope(bobobject4.body,roof.body, 50,0);
	rope5 = new Rope(bobobject5.body,roof.body, 100,0);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("pink");
  Engine.update(engine);
  
  roof.display();

  //display the bobobject
  bobobject1.display();
  bobobject2.display();
  bobobject3.display();
  bobobject4.display();
  bobobject5.display();
  

  //display the ropes
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}

function keyPressed(){
	//apply force to the bobobject;
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(bobobject1.body,bobobject1.body.position,{x:730,y:0});
	}
}



