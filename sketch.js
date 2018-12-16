var w = 20;
var cols, rows;
var snake;
var paused = true;
var score = 0;

function startOver() {
  //start a new game from scratch
  background(20,20,20);
  snake = new Snake(createVector(width/2,height/2), createVector(1, 0), 2);
  apple = new Apple();
  apple.randomize(snake.segments);
  paused = false;
  textSize(22);
  score_text = text('Score: 0', 50, 50);
}

function setup() {
  //iniitalize the canvas, set framerate, start game
  var cnv = createCanvas(600, 400);
  cols = width/w;
  rows = height/w;
  cnv.position((windowWidth-width)/2, 30);
  frameRate(3.0);
  //startOver();
  background(20,20,20);
  fill(0, 0, 255)
  textSize(72);
  text('Snake', 80, 120);
  textSize(48);
  text('to start', 120, 300);
  text('press space', 110, 350);

}

function draw() {
  if(paused == false) {

    let snake_ate = snake.ate_apple; //has the snake eaten an apple?
    let snake_alive = snake.alive; //is snake alive now?
    if(snake.alive == true) { //if so, update
      //only update if the snake is alive
      snake.run();
      apple.run();
    }

    //check if updating changed anything
    if(snake.ate_apple != snake_ate) { //did the snake eat?
      snake.ate_apple = false;
      score += 1;
      //to redraw the text, must clear screen and redraw everything
      textSize(22);
      background(20,20,20);
      text('Score: ' + score, 50, 50);
      snake.render();
      snake.drawBody();
    }


    if(snake.alive != snake_alive) { //did snake STOP being alive?
      //snakes life-situation just changed
      if(snake.alive == false) {
        fill(0, 0, 255)
        textSize(72);
        text('YOU DIED', 80, 120);
        textSize(48);
        text('to start over', 120, 300);
        text('press space', 110, 350);
      }
    }
  }
}

function keyPressed(){
  //text(keyCode, 50,50);
  if(keyCode === UP_ARROW){
      snake.setVel(createVector(0, -1));
  }
  if (keyCode === DOWN_ARROW){
      snake.setVel(createVector(0, 1));
  }
  if(keyCode === RIGHT_ARROW){
      snake.setVel(createVector(1, 0));
  }
  if(keyCode === LEFT_ARROW){
      snake.setVel(createVector(-1, 0));
  }
  if(keyCode == 32) { //space bar
    //start over
    startOver();
  }
  if(keyCode == ESCAPE) {
    paused = !paused;
  }
}
