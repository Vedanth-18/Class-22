const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;

var box, box1, box2;

function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground();

    box = new Box(150,200,50,50);
    box1 = new Box(200, 100, 50,50);

    // var ball_options ={
    //     restitution: 1.0
    // }

    // ball = Bodies.circle(200,100,20, ball_options);
    // World.add(world,ball);

    // console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);

    ground.display();
    box.display();
    box1.display();
    // ellipseMode(RADIUS);
    // ellipse(ball.position.x, ball.position.y, 20, 20);
}