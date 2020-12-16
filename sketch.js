const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var score=0;
var backgroundImg;
var bg="green.jpg";

function preload(){
    getBackgroundImage();
}

function setup() {
	createCanvas(1350, 600);
    
    engine = Engine.create();
    world = engine.world;
    
    ground= new Ground(675,595,1350,10);
    ground2= new Ground(1100,300,220,10);
    ground3= new Ground(600,520,280,10);

    
    box= new Box(1040,275,30,40);
    box2= new Box(1070,275,30,40);
    box3= new Box(1100,275,30,40);
    box4= new Box(1130,275,30,40);
    box5= new Box(1160,275,30,40);
    box6= new Box(1070,245,30,40);
    box7= new Box(1100,245,30,40);
    box8= new Box(1130,245,30,40);
    box9= new Box(1100,215,30,40);

    box10= new Box(510,495,30,40);

    box11= new Box(540,495,30,40);
    box12= new Box(570,495,30,40);
    box13= new Box(600,495,30,40);
    box14= new Box(630,495,30,40);
    box15= new Box(660,495,30,40);

    box16= new Box(690,495,30,40);

    box17= new Box(540,455,30,40);
    box18= new Box(570,455,30,40);
    box19= new Box(600,455,30,40);
    box20= new Box(630,455,30,40);
    box21= new Box(660,455,30,40);
    
    box22= new Box(570,425,30,40);
    box23= new Box(600,425,30,40);
    box24= new Box(630,425,30,40);

    box25= new Box(600,395,30,40);
     
    polygon=new Polygon(170,500,1);
    
    slingShot = new SlingShot(polygon.body,{x:170,y:500});



    Engine.run(engine);
  
}

function draw() {
    rectMode(CENTER);
    
    
  
    if(backgroundImg){
        background(backgroundImg);
        }
    
  textSize(40);
  fill("white");
  text("SCORE :" + score, 950, 40);
  
    drawSprites();
    
    fill("lightblue");
    box.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box10.display();
    box11.display();
    box12.display();
    box13.display();
    box14.display();
    box15.display();
    box16.display();
    

    fill("lightgreen");
    box6.display();
    box7.display();
    box8.display();
    box22.display();
    box23.display();
    box24.display();
    fill("pink");
    box9.display();
    box17.display();
    box18.display();
    box19.display();
    box20.display();
    box21.display();
    


    ground.display();
    ground2.display();
    ground3.display();
    
    
    fill("grey");
    box25.display();
    
    slingShot.display();
    polygon.display();

    box.score();
    box2.score();
    box3.score();
    box4.score();
    box5.score();
    box6.score();
    box7.score();
    box8.score();
    box9.score();
    box10.score();
    box11.score();
    box12.score();
    box13.score();
    box14.score();
    box15.score();
    box16.score();
    box17.score();
    box18.score();
    box19.score();
    box20.score();
    box21.score();
    box22.score();
    box23.score();
    box24.score();
    box25.score();
    getBackgroundImage();


}

function mouseDragged(){
   
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    
}


function mouseReleased(){
    slingShot.fly();
    
}

function keyPressed(){
    if(keyCode === 32){
       slingShot.attach(polygon.body);
    }
}
async function getBackgroundImage() {
    var response = await fetch('http://worldtimeapi.org/api/timezone/Asia/Tokyo')
    console.log(response)

    var responseJSON = await response.json()
    console.log(responseJSON)

    console.log(responseJSON.datetime)
    var datetime = responseJSON.datetime
    var hour = datetime.slice(11, 13)
    console.log(hour)

    if(hour>=6 && hour<18){
        bg="green.jpg";
    }
    else{
        bg="black.jpg";
    }
    backgroundImg=loadImage(bg)
    console.log(backgroundImg)
}