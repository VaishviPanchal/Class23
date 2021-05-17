const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
//Namespacing

var engine,world;
var ball,box1,ground;

function setup() {
  var canvas = createCanvas(600,400);
  
  engine = Engine.create();
  world = engine.world;


  box1 = new Box(200,200,50,100);
  box2 = new Box(230,50,50,150);
  ground = new Ground(300,380,600,20);
 console.log(box1)
  // objname = new className();

}

function draw() {
  background(0); 
  
  Engine.update(engine);

  rectMode(CENTER);

  box1.display();
  box2.display();
  ground.display();


}