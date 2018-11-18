var data;


function preload(){
  console.log("PRELOAD");
  data = loadJSON("population.json");
  console.log(data);
}

function setup(){
  //data.countrydata[3].males

  var cnv = createCanvas(800, 800);
  //cnv.position((windowWidth-width)/2, 30);
  cnv.position(30, 30);
  background(0);
  stroke(0);
}

function bubbleSort(){
  var temp = 0;
  var males = countrydata.males
  //for(var i = countrydata.male.length -1; i >)
}

function draw(){
  background(20,20,20,20);
  //let values = [50, 80, 20, 90, 60, 30, 20, 10, 10, 90, 74];
  //let labels = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen'];
  let values = [];
  let labels = [];
  let countries = ['Afghanistan', 'Argentina', 'United States', 'Mexico'];
  let countryCount = data['countrydata'].length;
  for(let i=0;i<countryCount;i++) {
    if(countries.includes(data['countrydata'][i]).country) {
      values.push(data['countrydata'][i].males);
      labels.push(data['countrydata'][i].country)
    }
  }
  let biggest = max(values);
  let longest = 400;
  let vertical_space = 500;
  for(let i=0;i<values.length;i++) {
    fill(1, 1, 250);
    rect(20, 20+i*vertical_space/values.length, values[i]*longest/biggest, 0.8*vertical_space/values.length);
    fill(250, 250, 250);
    text(labels[i], 30, 40+i*vertical_space/values.length);
  }

}
