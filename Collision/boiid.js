function boid(location, velocity, radius, col){
  this.loc=location;
  this.vel=velocity;
  this.rad=radius;
  this.col=col;
  this.acc = createVector(0,.1);

  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }

  //This function changes the location of the Ball
  //by adding speed to x and y
  this.update=function(){
      var d = this.loc.dist(chaser.loc);
      if (d<200){
        //this controlls the acceleration and velolcity
        var steeringForce = p5.Vector.sub(this.loc, chaser.loc);
        steeringForce.normalize();  //  changes the magnitud to 1
        steeringForce.mult(.15);    //  scales the magnitude to 0.5
        this.vel.add(steeringForce);
      }

      this.loc.add(this.vel);
  }


  //checkEdges()reverses speed when the ball touches an edge
  this.checkEdges = function(){
    if(this.loc.x < 0) this.vel.x = -this.vel.x;
    if(this.loc.x > width) this.vel.x = -this.vel.x;
    if(this.loc.y < 0) this.vel.y = -this.vel.y;
    if(this.loc.y > height) this.vel.y = -this.vel.y;
  }
//this is the function that renders the boids
  this.render = function (){
    fill(255,255,255);
    push() // push or save the current coord system into the stack
    translate(this.loc.x, this.loc.y);
    rotate(this.vel.heading() + radians(90));
    triangle(-10, 10, 10, 0, 0, -25);
    pop()  //  pop or restore the coordianate system from the stack
    //ellipse(this.loc.x, this.loc.y, this.rad, this.rad);
  }

  }
