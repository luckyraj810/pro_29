
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1400, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground(700,690,1400,20);
	ground2=new Ground(600,550,400,20);
	ground3=new Ground(1200,350,300,20);
	box1=new Box(480,350,40,60);
	box2=new Box(520,350,40,60);
	box3=new Box(560,350,40,60);
	box4=new Box(600,350,40,60);
	box5=new Box(640,350,40,60);
	box6=new Box(680,350,40,60);
	box7=new Box(720,350,40,60);
	box8=new Box(520,310,40,60);
	box9=new Box(560,310,40,60);
	box10=new Box(600,310,40,60);
	box11=new Box(640,310,40,60);
	box12=new Box(680,310,40,60);
	box13=new Box(560,270,40,60);
	box14=new Box(600,270,40,60);
	box15=new Box(640,270,40,60);
	box16=new Box(600,230,40,60);

	box17=new Box1(1120,150,40,60);
	box18=new Box1(1160,150,40,60);
	box19=new Box1(1200,150,40,60);
	box20=new Box1(1240,150,40,60);
	box21=new Box1(1280,150,40,60);
	box22=new Box1(1160,110,40,60);
	box23=new Box1(1200,110,40,60);
	box24=new Box1(1240,110,40,60);
	box25=new Box1(1200,70,40,60);

	polygon1=new Polygon(150,470,20);

	r1=new Rope(polygon1.body,{x:150,y:470});

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  Engine.update(engine);
  ground.display();
  ground2.display();
  ground3.display();
  box1.display();
  box2.display();
  box3.display();
  box4.display();
  box5.display();
  box6.display();
  box7.display();
  box8.display();
  box9.display();
  box10.display();
  box11.display();
  box12.display();
  box13.display();
  box14.display();
  box15.display();
  box16.display();
  box17.display();
  box18.display();
  box19.display();
  box20.display();
  box21.display();
  box22.display();
  box23.display();
  box24.display();
  box25.display();

  polygon1.display();

  r1.display();
}


function mouseDragged (){

	Matter.Body.setPosition(polygon1.body,{x:mouseX,y:mouseY});
	
	}
	
	function mouseReleased(){
	
	r1.fly();
	
	
	
	}



