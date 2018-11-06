
var boids = [];
var chaser;
var other;
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(0);
  loadBoids(20);
  stroke(0);
}
function draw(){
  background(20,20,20,20);
  for(var i = 0; i < boids.length; i++){
    boids[i].run();
  }
}
function loadBoids(numBoids) {
  for(var i = 0; i < numBoids; i++){
    var loc = createVector(random(width), random(height));
    var vel = createVector(random(-2,2), random(-2,2))
    var rad = random(5,10);
    var col = (65,125,255);
    var b = new Boid(loc, vel, rad, col);
    boids.push(b);
  }
  var loc = createVector(width/2, height);
  var vel = createVector(random(-2,2), random(-2,2));
  var rad = 55;
  var col = color(0,0,150);
  chaser = new Ball(loc, vel, rad, col);

}
