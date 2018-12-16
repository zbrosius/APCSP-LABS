function Apple() {

  this.loc = createVector(20, 0); //velocity should be set by setVel method

  this.run = function() {
    this.update();
    this.render();
  }

  this.update = function() {
    //apple does nothing
  }

  this.render = function(){
    fill(255,0,0);
    rect(this.loc.x, this.loc.y, w, w)
  }

  this.randomize = function(snake_segments) {
    //note: snake segments includes all body and the head
    console.log("MOVING: " + snake_segments);
    //fill(0, 0, 0);
    //rect(this.loc.x, this.loc.y, w, w);
    let good_location = false;
    while(good_location == false) { //have not found good apple location
      this.loc = createVector(width/2-Math.floor(Math.random()*16-8)*w,
                              height/2+Math.floor(Math.random()*12-6)*w);
      good_location = true; //hope this is good, but lets check
      let count = snake_segments.length;
      for(let i=0;i<count;i++) {
        //go through every segment
        let seg = snake_segments[i];
        //if the apple is colliding with this body seg
        if(this.loc.x == seg.x && this.loc.y == seg.y){
          console.log("APPLE ON SNAKE!");
          good_location = false;
        }
      }
    } //end of while loop, if good_location is false, repeat
  }

}
