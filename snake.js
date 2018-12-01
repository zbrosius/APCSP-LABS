function Snake(loc, vel, len) {

  this.loc = loc; //velocity should be set by setVel method
  this.segments = [];
  this.length = len;
  this.vel = vel; //will be overwritten later by setVel call

//    a         V
//            x a x
  this.setVel = function(vel) {
    //new logic: if snake's x is 0 and vel's x is nonzero,
    // or if snake's y is 0 and vel's y is nonzero
    // then we can use the instruction

    if(this.vel.y > 0 && vel.x == 0) {
      //snake is going down and user pressed up, ignore
    }
    else if(this.vel.y < 0 && vel.y > 0) {
      //snake is going up and user pressed down, ignore
    }
    else if(this.vel.x < 0 && vel.x > 0) {
      //snake going left and user pressed right, ignore
    }
    else if(this.vel.x > 0 && vel.x < 0) {
      //snake going right, user pressed left, ignore
    }
    else {
      this.vel = vel;
      console.log(vel);
      this.vel.mult(w);
    }
  }

  this.getVel = function() {
    return vel;
  }

  this.run = function() {
    this.update();
    this.render();
    this.checkEdges();
  }

  this.checkEdges = function() {
    //check if the snake is on top of the apple
    if(this.loc.x == apple.loc.x && this.loc.y == apple.loc.y) {
      console.log("APPLE");
      this.length += 1;
      apple.randomize();
    }

    //check if the snake is on top of a body segment
    let count = this.segments.length;
    for(let i=0;i<count;i++) { //go through every segment
      let seg = this.segments[i];
      //if the snake is colliding with this body seg
      if(this.loc.x == seg.x && this.loc.y == seg.y){
        console.log("body");
        paused = true; //gameover later
      }
    }

    //check if the snake is off the map
    if(this.loc.x < 0) {
      paused = true;
    }

  }

  this.update = function() {
    let headLoc = createVector(this.loc.x, this.loc.y);
    this.segments.push(headLoc);
    if(this.segments.length > this.length) {
      let remove = this.segments.shift();
      fill(0, 0, 0);
      rect(remove.x, remove.y, w, w);
    }
    console.log(this.segments);
    this.loc.add(this.vel);

    this.loc.x = constrain(this.loc.x, 0, width-w);
    this.loc.y = constrain(this.loc.y, 0, height-w);
  }

  this.render = function(){
    fill(0,255,0);
    rect(this.loc.x, this.loc.y, w, w)
  }

  this.setVel(vel); //set velocity with method
  this.render(); //render first frame (1 square snake)
}
