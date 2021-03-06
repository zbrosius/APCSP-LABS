
function Ball(location, velocity, radius, col){
  this.loc = location;
  this.vel = velocity;
  this.rad = radius;
  this.col = (0,0,255);
  this.acc = createVector(0,.1);
  this.run = function(){
  this.checkEdges();
      this.update();
      this.render();
    }

  this.update = function(){
  //  this.locX = this.locX + this.speedX;
  //  this.locY = this.locY + this.speedY;
    this.loc.add(this.vel);
    this.vel.add(this.acc);
  }

  this.checkEdges = function(){
     if(this.loc.x < 0) this.vel.x = -this.vel.x;
     if(this.loc.x > width) this.vel.x = -this.vel.x;
     if(this.loc.y < 0) this.vel.y = -this.vel.y;
     if(this.loc.y > height) this.vel.y = -this.vel.y;
  }


  this.render = function(){
    fill(this.col);
    ellipse(this.loc.x, this.loc.y, this.rad, this.rad);
  }
}
