//supervised learning
Perceptron p;

//Povar povars = new Array[8];
var povars = new Array(8);




function setup() {
createCanvas(500,500);
p = new Perceptron();

for (var i=0; i<povars.length; i++) {
  povars[i] = new Povar();
  
}


var inputs = [-1,0,5];
var guess = p.guess(inputs);
println(guess);
}


function draw() {
background(255);
stroke(0);
line(0,0,width,height);

for (Povar p: povars) {
  p.show();
}
}