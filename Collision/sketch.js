var boids =[];//array
var chaser;
//this is the setup function
function setup() {
  var cnv = createCanvas(800, 800);
  cnv.position((windowWidth-width)/2, 30);
  background(0,0,0);
  loadboid(100);
  frameRate(60);
  chaser = new Ball(createVector(width/2, height/2), createVector(1,2), 25, color(255, 0, 0));
}
//this is the draw function
function draw() {
  background(20,20,20, 90);
  chaser.run();
  for(var i= 0; i<boids.length; i++){
    boids[i].run();
  }

//This is to splice the boids
  for(var i = 0; i < boids.length; i++){
    var x = boids[i];
    var y = chaser.loc;
    var z = x.loc;
//here we are checking to see if the boids should be spliced from the array
    var dist = y.dist(z);
    if (dist <=25){
      boids.splice(i,1);
    }
  }
}

//this is to load the boid array of boids
function loadboid(numboid){

  for(i=50; i < numboid; i++){
    var loc = createVector(random(width), random(height));
    var vel = createVector(random(-3,3), random(-3,3));
    var radius=random(10,10);
    var col= color(random(1, 255), random(1, 255), random(1, 255));
    boids.push(new boid(loc, vel, radius, col));
  }
  console.log(boids);
}
