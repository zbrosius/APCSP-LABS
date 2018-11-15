var data;

function preload(){
data = loadJSON("population.json");
console.log(data);
}

function setup(){
  data.countrydata[3].males

}

function bubbleSort(myarray){
  var temp = 0;
  var males = country.males
  for(var i = countrydata.male.length -1; i >)
}
////
 for (i=myarray.length -1; i >= 0; i--){
        for (j=0; j < i; j++){
            if (arr[j] > arr[j+1]){
                swap(arr, j, j+1);
            }
        }
    }
  
  
  
  
  var w = 20;
  var cols, rows;
  var snake;
  
  functionsetup() 
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
