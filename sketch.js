const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseimage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseimage = loadImage("./assets/base.png");
  playerimage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  //create player base body
  base=new Base(166,339,100,150)
  

  //create player body
  player=new Player(212,184,50,150)
  PlayerBow=new Bow(364,251,50,10)


}

function draw() {
  background(backgroundImg);
  fill('gray')
  text(mouseX+','+mouseY,mouseX,mouseY)
  //show the player image using image() function
  player.display()
  //show the playerbase image using image() function
  base.display()
  PlayerBow.display()


  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", width / 2, 100);

}
