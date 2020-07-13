var training = new Array(64);
// A Perceptron object
var ptron;

// We will train the perceptron with one "Point" object at a time
var count = 0;

// Coordinate space
var xmin = -1;
var ymin = -1;
var xmax = 1;
var ymax = 1;

// The function to describe a line
function f(x) {
  var y = -1.0 * x + 0.0;
  return y;
}

function sPerceptron() {
 

  // The perceptron has 3 inputs -- x, y, and bias
  // Second value is "Learning Constant"
  ptron = new Perceptron(3, 0.001); // Learning Constant is low just b/c it's fun to watch, this is not necessarily optimal

  // Create a random set of training points and calculate the "known" answer
  for (var i = 0; i < training.length; i++) {
    var x = random(xmin, xmax);
    var y = random(ymin, ymax);
    var answer = 1;
    if (y < f(x)) answer = -1;
    training[i] = {
      input: [x, y, 1],
      output: answer
    };
  }
}


function dPerceptron() {


  // Draw the line
  strokeWeight(1);
  stroke(255);
  var x1 = map(xmin, xmin, xmax, 0, width);
  var y1 = map(f(xmin), ymin, ymax, height, 0);
  var x2 = map(xmax, xmin, xmax, 0, width);
  var y2 = map(f(xmax), ymin, ymax, height, 0);
  line(x1, y1, x2, y2);

  // Draw the line based on the current weights
  // Formula is weights[0]*x + weights[1]*y + weights[2] = 0
  stroke(255);
  strokeWeight(2);
  var weights = ptron.getWeights();
  var x1 = xmin;
  var y1 = (-weights[2] - weights[0] * x1) / weights[1];
  var x2 = xmax;
  var y2 = (-weights[2] - weights[0] * x2) / weights[1];

  var x1 = map(x1, xmin, xmax, 0, width);
  var y1 = map(y1, ymin, ymax, height, 0);
  var x2 = map(x2, xmin, xmax, 0, width);
  var y2 = map(y2, ymin, ymax, height, 0);
  line(x1, y1, x2, y2);


  // Train the Perceptron with one "training" point at a time
  ptron.train(training[count].input, training[count].output);
  count = (count + 1) % training.length;

  // Draw all the points based on what the Perceptron would "guess"
  // Does not use the "known" correct answer
  for (var i = 0; i < count; i++) {
    stroke(255);
    strokeWeight(1);
    fill(255);
    var guess = ptron.feedforward(training[i].input);
    if (guess > 0) noFill();

    var x = map(training[i].input[0], xmin, xmax, 0, width);
    var y = map(training[i].input[1], ymin, ymax, height, 0);
    ellipse(x, y, 8, 8);
  }
}function Perceptron(n, c) {
  // Array of weights for inputs
  this.weights = new Array(n);
  // Start with random weights
  for (var i = 0; i < this.weights.length; i++) {
    this.weights[i] = random(-1,1);
  }
  this.c = c; // learning rate/constant
}

// Function to train the Perceptron
// Weights are adjusted based on "desired" answer
Perceptron.prototype.train = function(inputs, desired) {
  // Guess the result
  var guess = this.feedforward(inputs);
  // Compute the factor for changing the weight based on the error
  // Error = desired output - guessed output
  // Note this can only be 0, -2, or 2
  // Multiply by learning constant
  var error = desired - guess;
  // Adjust weights based on weightChange * input
  for (var i = 0; i < this.weights.length; i++) {
    this.weights[i] += this.c * error * inputs[i];
  }
}

// Guess -1 or 1 based on input values
Perceptron.prototype.feedforward = function(inputs) {
  // Sum all values
  var sum = 0;
  for (var i = 0; i < this.weights.length; i++) {
    sum += inputs[i] * this.weights[i];
  }
  // Result is sign of the sum, -1 or 1
  return this.activate(sum);
}

Perceptron.prototype.activate = function(sum) {
  if (sum > 0) return 1;
  else return -1;
}

// Return weights
Perceptron.prototype.getWeights = function() {
  return this.weights;
}