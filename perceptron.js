//activation function
var sign(var n)
{
if (n >= 0){
return 1;
} else {
return -1;  
}  
}


class Perceptron{
var weights = new Array[2];
  
//  var w0;
//  var w1;
  
 //constructor 
constructor(){
  //inicialize the weights randomly
  for(var i=0; i<weights.length; i++)
  weights[i] = random(1,-1);
  
  }
var guess(var inputs){
var sum = 0;
for(var i = 0; i<weights.length; i++) {
sum += inputs[i]*weights[i];
}
var output = sign(sum);
return output;
}
}