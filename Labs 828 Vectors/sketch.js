function Ball(locX, locY, rad, col){
   this.locX = locX;
   this.locY = locY;
   this.speedX = random(-3.0, 3.0);
   this.speedY = random(-3.0, 3.0);
   this.rad = rad;
   this.col = col;
  this.run = function(){
    this.checkEdges();
    this.update();
    this.render();
  }
   this.update = function(){
      this.locX = this.locX + this.speedX;
      this.locY = this.locY + this.speedY;
   }

   this.checkEdges = function(){
      if(this.locX < 0) this.speedX = -this.speedX;
      if(this.locX > width) this.speedX = -this.speedX;
      if(this.locY < 0) this.speedY = -this.speedY;
      if(this.locY > height) this.speedY = -this.speedY;
   }
   this.render = function(){
      fill(this.col);
      ellipse(this.locX, this.locY, rad, rad);
   }
   var b1;
   function setup() {
     var cnv = createCanvas(800, 800);
     cnv.position((windowWidth-width)/2, 30);
     background(20,20,20);
     b1 = new Ball(random(width), random(height),random(15, 35), color(250, 23, 23));
   }

   function draw() {
     b1.run();
   }
