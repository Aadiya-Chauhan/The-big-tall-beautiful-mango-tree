const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var engine, world, body;
var treeObj,groundObject;
var mango1, mango2, mango3, mango4, mango5, mango6;
var world, boy, stone1, chain1;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2=new mango(1200,200,30);
	mango3=new mango(1000,80,30);
	mango4=new mango(950,220,30);
	mango5=new mango(1050,200,30);
	mango6=new mango(1150,90,30);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	stone1 = new stone(20, 20);

	Engine.run(engine);
}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  groundObject.display();
  stone1.display();
}
