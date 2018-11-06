
function Boid(location, velocity, radius, col){
  this.loc = location;
  this.vel = velocity;
  this.rad = radius;
  this.col = col;
  this.acc = createVector(0,0);

  this.run = function(){
//github

  this.run();
      this.update();
      this.checkEdges();
      this.render();
    }

  this.update = function(){
    if(this !== ball){
      var d = this.loc.dist(ball.loc);
      if(d<350){
        var steerForce = p5.Vector.sub(ball.loc, this.loc);
        steeringForce.normalize();
        steeringForce.mult(.02);
        this.vel.add(steeringForce);
    }
    if(d<150){
      var steerForce = p5.Vector.sub(this.loc, ball.loc);
      steeringForce.normalize();
      steeringForce.mult(.1);
      this.vel.add(steeringForce);
    }
    this.vel.add(steeringForce);
  }
  this.vel.limit(3);
    this.loc.add(this.vel);



  this.checkEdges = function(){
     if(this.loc.x < 0) this.vel.x = -this.vel.x;
     if(this.loc.x > width) this.vel.x = -this.vel.x;
     if(this.loc.y < 0) this.vel.y = -this.vel.y;
     if(this.loc.y > height) this.vel.y = -this.vel.y;
  }


  this.render = function(){
    push()
    translate(this.loc.x, this.loc.y);
    rotate(someAngle);
    triangle(-5,0,5,0,0,-15);
    pop()
  }
