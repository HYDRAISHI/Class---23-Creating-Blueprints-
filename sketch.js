
  
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, box_1, box_2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    //creating the boxes and the ground
    box_1 = new Box(200,300,50,50);
    box_2 = new Box(240,100,50,100);
    ground = new Ground(200,390,400,20);

    console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
    //displaying the boxes and the ground
    box_1.display();
    box_2.display();
    ground.display();
}

