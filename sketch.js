var alien;
var backgroundImage
var rocket
var blast

function preload() {
  backgroundImage = loadImage("./assests/background.png.webp");
  alien = loadImage("./assests/Alien.png.jpg");
  rocket = loadImage("./assests/rocket.png");
  blast = loadImage("./assests/blast.png");

}

function setup() {
  canvas = createCanvas(400, 800);

  rocket = createSprite(200, 400, 50, 50);
  rocket.addImage("rocket.png");
  rocket.scale = 0.5;

  alien = createSprite(400, 200, 50, 50);
  alien.addImage("Alien.png.jpg");
  alien.scale = 0.5;
}

function draw() {
  background("backgroundImage")
  drawSprites();
}
