const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, box2, box3,box4, box5, box6, box7, box8;
var box9, box10, box11, box12, box13;
var box14, box15, box16,box17, box18, box19, box20, box21, box22, box23;
var hero,monster,rope,ground;

function preload() {
  bg = loadImage("gamingbackground2.png");
}

function setup() {
  createCanvas(1300, 700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(290, 550, 1200, 20);

  hero = new Hero(300,450,100);
  rope = new Rope(hero.body, { x: 300, y: 0 });
  monster = new Monster(1100,400,250);

  //stack1
  box1 = new Box(600, 50, 50, 50);
  box2 = new Box(600, 100, 50, 50);
  box3 = new Box(600, 150, 50, 50);
  box4 = new Box(600, 200, 50, 50);
  box5 = new Box(600, 250, 50, 50);
  box6 = new Box(600, 300, 50, 50);
  box7 = new Box(600, 350, 50, 50);
  box8 = new Box(600, 400, 50, 50);
//stack2
box9 = new Box(680, 50, 50, 50);
box10 = new Box(680, 100, 50, 50);
box11 = new Box(680, 150, 50, 50);
box12= new Box(680, 200, 50, 50);
box13= new Box(680, 250, 50, 50);
//stack3
box14 = new Box(760, 50, 50, 50);
box15 = new Box(760, 100, 50, 50);
box16 = new Box(760, 150, 50, 50);
box17= new Box(760, 200, 50, 50);
box18= new Box(760, 250, 50, 50);
box19 = new Box(760, 300, 50, 50);
box20 = new Box(760, 350, 50, 50);
box21 = new Box(760, 400, 50, 50);
box22= new Box(760, 450, 50, 50);
box23= new Box(760, 500, 50, 50);
//stack4
box24 = new Box(840, 50, 50, 50);
box25 = new Box(840, 100, 50, 50);
box26= new Box(840, 150, 50, 50);
box27= new Box(840, 200, 50, 50);
box28 = new Box(840, 250, 50, 50);
box29= new Box(840, 300, 50, 50);
box30 = new Box(840, 350, 50, 50);

}

function draw() {
  background(bg);
  Engine.update(engine);
  ground.display();

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
  box26.display();
  box27.display();
  box28.display();
  box29.display();
  box30.display();

  hero.display();
  rope.display();
  monster.display();
  detectCollision(hero,monster);

}

function mouseDragged(){
  Matter.Body.setPosition(hero.body,{x:mouseX,y:mouseY})
  
}

function detectCollision(s,m){
  spos=s.body.position
  mpos=m.body.position
  var distance=dist(spos.x,spos.y,mpos.x,mpos.y)
  if(distance<s.r+m.r){
    Matter.Body.setStatic(m.body,false)
  }
 }