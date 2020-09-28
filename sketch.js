const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var box1, box2;
var ground;

function setup() {
  createCanvas(600,600);

  engine = Engine.create();
  world = engine.world;

  box1 = new Box(230,200,50,100);
  box2 = new Box(200,350,50,100);

  ground = new Ground(300,595,600,20);
  
}

function draw() {
  background("lightgrey");  
  Engine.update(engine);

  box1.display();
  box2.display();
  ground.display();
}