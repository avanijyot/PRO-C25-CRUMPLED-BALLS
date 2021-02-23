//to create the sprites objects
var dustbinObj;
var groundObject;
var paperObj;	
var world;

//physics engine
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function setup() {

	//to create the canvas
	createCanvas(1600, 700);

	//rectMode
	rectMode(CENTER);

	//to create the engine and world
	engine = Engine.create();
	world = engine.world;

	//to create the groundObject, dustbinObj and paperObj
	groundObject = new ground(width/2, 670, width, 20);
	dustbinObj = new dustbin(1200, 650);
	paperObj = new paper(300, 10, 35);

	//to run the engine
	Engine.run(engine);
  
}

function draw() {

  //rectMode	
  rectMode(CENTER);

  //to give the background
  background(230);

  //to display the objects 
  groundObject.display();
  dustbinObj.display();
  paperObj.display();

}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObj.body, paperObj.body.position, {x : 335, y : -230});
	}
}