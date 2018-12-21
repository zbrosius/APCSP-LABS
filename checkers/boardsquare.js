function BoardSquare() {

  this.loc = createVector(0, 0);
  
  this.run = function() {
    this.update();
    this.render();
  }

  this.update = function() {
    // does nothing
  }

  this.render = function(){
    fill(255,0,0);
    rect(this.loc.x, this.loc.y, w, w)
  }



}
