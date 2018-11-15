fuction Snake(loc, vel)(

  this.update();
  this.render();
}

this.update = function(){
  this.vel.mult(w);
  this.loc.add(this.vel);
  this.loc.x = constrain(this.loc.x, 0, width-w);
  this.loc.y = constrain(this.loc.y, 0, height-w);
}

this.render = function(){
  fill(0,255,0);
  rect(this.loc.x, this.loc.y, w, w)
}
}
}
