var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, gameState;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobDiameter = 200;
function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);


	engine = Engine.create();
	world = engine.world;

	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);

	bar = new roof(600, 100, 1000, 50);
	bobObject1 = new bob(200, 500, 100);
	bobObject2 = new bob(400, 500, 100);
	bobObject3 = new bob(600, 500, 100);
	bobObject4 = new bob(800, 500, 100);
	bobObject5 = new bob(1000, 500, 100);
	stringy1 = new rope(bobObject1.body, bar.body, -bobDiameter*2, 0,bobObject1.y);
	stringy2 = new rope(bobObject2.body, bar.body, -bobDiameter, 0,bobObject2.y);
	stringy3 = new rope(bobObject3.body, bar.body, 0, 0,bobObject3.y);
	stringy4 = new rope(bobObject4.body, bar.body, bobDiameter, 0,bobObject4.y);
	stringy5 = new rope(bobObject5.body, bar.body, bobDiameter*2, 0,bobObject5.y);
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x: -1000, y: 2000});
	}
}
function draw() {
  rectMode(CENTER);
  background("pink");
  
  bar.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display(); 

  stringy1.display();
  stringy2.display();
  stringy3.display();
  stringy4.display();
  stringy5.display();
  textSize(30);
  fill("darkblue")
  text("Simple Newton's Cradle.Use  UP_ARROW key", 300, 50);
  drawSprites();
}

/*function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bobObject1.body, {x: mouseX, y: mouseY});
    }
}


function mouseReleased(){
    gameState = "launched";
}*/

