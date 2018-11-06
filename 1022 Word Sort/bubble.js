function setup(){
  varcnv = createCanvas(800, 800);
  cnv.position((windowwidth-width)/2, 30);
  background(20,20,20);
  fill(20,50,120);
}
words = ['b','c','a','z'];

console.log(words);
for(var i = words.length - 1; i>= i; i--){
  for(var j = 0; j < words.length; j++){
    if(words[j] > words[j + 1]){
      var temp = words[j];
      words[j] = words[j + 1];
      words[j + 1] = temp;
    }
    console.log(words);
  }
}
function draw() {
}
