const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground, block1,block2,block3,block4,block5,block6,block7,block8,block9,block10,block11,block12,block13,block14,block15,block16;
var slingShot;
var score=0;
function preload() {

}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    ground = new Ground(600,height,1200,20);
    polygon= new Polygon(200,200,30,30);
slingShot= new Slingshot(polygon.body,{x:100,y:200});
    block1= new Box(600,380,30,40);
     block2= new Box(615,380,30,40);
     block3= new Box(630,380,30,40);
     block4= new Box(645,380,30,40);
     block5= new Box(660,380,30,40);
     block6= new Box(675,380,30,40);
     block7= new Box(690,380,30,40);
     block8=new Box(640,350,30,40);
     block9=new Box(610,350,30,40);
     block10=new Box(625,350,30,40);
     block11=new Box(640,350,30,40);
     block12=new Box(655,350,30,40);
     block13=new Box(670,350,30,40);
     block14= new Box(670,310,60,40);
     block15= new Box(610,310,60,40);
     block16= new Box( 640,270,40,40);
     

     Engine.run(engine);
     
}

function draw(){
    background("white");
    Engine.update(engine);
    text("SCORE:"+score,900,40);
    ground.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
     block8.display();
     block9.display();
     block10.display();
     block11.display();
   block12.display();
     block13.display();
     block14.display();
     block15.display();
    block16.display();
    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
     block8.score();
     block9.score();
     block10.score();
     block11.score();
   block12.score();
     block13.score();
     block14.score();
     block15.score();
    block16.score();
    slingShot.display();
    polygon.display();
    detectCollision(polygon,block1);
    detectCollision(polygon,block2);
    detectCollision(polygon,block3);
    detectCollision(polygon,block4);
    detectCollision(polygon,block5);
    detectCollision(polygon,block6);
    detectCollision(polygon,block7);
    detectCollision(polygon,block8);
    detectCollision(polygon,block9);
    detectCollision(polygon,block10);
    detectCollision(polygon,block11);
    detectCollision(polygon,block12);
    detectCollision(polygon,block13);
    detectCollision(polygon,block14);
    detectCollision(polygon,block15);
    detectCollision(polygon,block16);
drawSprites();
    
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingShot.fly();
}




function keyPressed(){
	if(keyCode===32){
        Matter.Body.setPosition(polygon.body,{x:100,y:200})
		slingShot.attach(polygon.body);
	}
}

function detectCollision(lpolygon,lblock){
	
	blockBodyPosition=lblock.body.position
	polygonBodyPosition=lpolygon.body.position

	var distance=dist(polygonBodyPosition.x,polygonBodyPosition.y,blockBodyPosition.x,blockBodyPosition.y)
	if(distance<-lblock.r+lpolygon.r){
		Matter.Body.setStatic(lblock.body,false);
	}
}