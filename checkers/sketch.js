var w = 50;
var cols, rows;
var all_squares = [];

function setup() {
  //iniitalize the canvas, set framerate, start game
  var cnv = createCanvas(400, 400);
  cols = width/w;
  rows = height/w;
  cnv.position((windowWidth-width)/2, 30);
  frameRate(1.0);
  background(20,20,20);
  for(let row=0;row<rows;row++) {
    for(let col=0;col<cols;col++) {
      //draw a square when both row and col are even, or both are odd
      if(row%2 == 0 && col%2 == 0 || row%2 == 1 && col%2 == 1) {
        let next_square = new BoardSquare();
        next_square.loc = createVector(col*w, row*w);
        //put next_square into all_squares list
        all_squares.push(next_square);
      }
    }
  }
}

function draw() {
  //loop through all_squares and .run() each square
  let count = all_squares.length;
  for(let i=0;i<count;i++) {
    all_squares[i].run();
  }
}

function keyPressed(){
  //text(keyCode, 50,50);
  if(keyCode === UP_ARROW){

  }
  if (keyCode === DOWN_ARROW){

  }
  if(keyCode === RIGHT_ARROW){

  }
  if(keyCode === LEFT_ARROW){

  }
  if(keyCode == 32) { //space bar
    //start over

  }
  if(keyCode == ESCAPE) {

  }
}
