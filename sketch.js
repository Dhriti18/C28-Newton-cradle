
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
function preload()
{
	
}

function setup() {
	createCanvas(1000, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	//Bobs
	bob1=new Bob(287,390);
	bob2=new Bob(346,390);
	bob3=new Bob(415,390);
	bob4=new Bob(484,390);
	bob5=new Bob(553,390);
	roof1=new Roof(417,172,340,50);

string1=new Rope(bob1.body,roof1.body,-120);
string2=new Rope(bob2.body,roof1.body,-55);
string3=new Rope (bob3.body,roof1.body,10);
string4=new Rope(bob4.body,roof1.body,78);
string5=new Rope(bob5.body,roof1.body,150);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,0,255);
  text("X"+mouseX+"Y"+mouseY,mouseX,mouseY);
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();


  roof1.display();
  string2.display();
  string1.display();
  string3.display();
  string4.display();
  string5.display();
  drawSprites();
 
}
function keyPressed(){
	if(keyCode===UP_ARROW){

		Body.applyForce(bob1.body,bob1.body.position,{x:-100,y:-600});
}
}

