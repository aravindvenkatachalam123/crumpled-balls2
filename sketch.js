
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var box1,box2,box3;
var ground;
var paper,paperimg
function preload(){

}
function setup() {
	createCanvas(800,700);


	engine = Engine.create();
	world = engine.world;
  ground = new Ground(400,700,800,20)
  paper=new Paper();
  //bottom
  box1 = new Box(660,690,250,10);
  //right
  box2=new Box(760,640,20,100);
 //left
  box3=new Box(560,640,20,100);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  box1.display() ;
  box2.display();
  box3.display();
  ground.display()
  paper.display();
  drawSprites();

 
}
function keyPressed(){
  if( keyCode===UP_ARROW ){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-580});
    
  }
}