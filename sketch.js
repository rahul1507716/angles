const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground1, ball;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ball = new box(200,300,50,50);
    ball1 = new box(240,100,50,100);
    ground1 = new ground(200,390,400,20);
}

function draw(){
    background(0);
    Engine.update(engine);
    ball.display();
    ball1.display();
    ground1.display();
}