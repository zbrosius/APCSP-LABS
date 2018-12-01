var w = 20;
var cols, rows;
var snake;
var paused = false;

function setup() {
 var cnv = createCanvas(600, 400);
 cols = width/w;
 rows = height/w;
 cnv.position((windowWidth-width)/2, 30);
 frameRate(3.0);
 background(20,20,20);
 snake = new Snake(createVector(width/2,height/2), createVector(1, 0), 2);
 apple = new Apple();
 apple.randomize();
}

function draw() {
 if(paused == false) {
   snake.run();
   apple.run();
 }
}

function keyPressed(){
 //text(keyCode, 50,50);
 if(keyCode === UP_ARROW){
   snake.setVel(createVector(0, -1));
 }
 if (keyCode === DOWN_ARROW){
   snake.setVel(createVector(0, 1));
 }
 if(keyCode === RIGHT_ARROW){
   snake.setVel(createVector(1, 0));
 }
 if(keyCode === LEFT_ARROW){
   snake.setVel(createVector(-1, 0));
 }
 if(keyCode == ESCAPE) {
   paused = !paused;
 }
}
