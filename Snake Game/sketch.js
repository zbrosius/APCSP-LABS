var w = 20;
 var cols, rows;
 var snake;

 functionsetup() {
 var cnv = createCanvas(800, 800);
 cols = width/w;
 rows = height/w;
 cnv.position((windowWidth-width)/2, 30);
 frameRate(3);
 background(20,20,20);
 snake = new Snake(createVector(width/2,height/2), createVector(1, 0));
}
function draw() {
 snake.run();
}

function keyPressed(){
 text(keyCode, 50,50);
 if(keyCode === UP_ARROW){
   snake.vel = createVector(0,-1*w)
 }
}
