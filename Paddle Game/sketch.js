var balls = [];
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(0);
  loadBalls(50);
  stroke(0);
}
function draw(){
  background(20,20,20,20)
  for(var i = 0; i < balls.length; i++){
    balls[i].run();

  }
}
function loadBalls(numBalls) {
  for(var i = 0; i < numBalls; i++){
    var loc = createVector(random(width), random(height));
    var vel = createVector(random(-2,2), random(-2,2));
    var rad = random(5,10);
    var col = (65,125,255);
    balls.push(new Ball(loc, vel, rad, col));
  }
}
