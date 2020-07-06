


 //coin = Math.floor(Math.random(bbb));

    








function matrix()
{ 
  push();
  rotateY(PI / 6);
  stroke(153);
  
  let rad = millis() / 1000;
  // Set rotation angles
  let ct = cos(rad);
  let st = sin(rad);
  // Matrix for rotation around the Y axis
  applyMatrix(  ct, 0.0,  st,  0.0,
               0.0, 1.0, 0.0,  0.0,
               -st, 0.0,  ct,  0.0,
               0.0, 0.0, 0.0,  1.0);
  stroke(255);
  box(144);
  pop();
}



function matrixM()
{
    push();
    // loop through every element in array a
  for (var i = 0; i < a.length; i++) {
    
    // loop through every element in array a[i]
    for (var j = 0; j < a[i].length; j++) {
      var x = 150 + j * 60; // column
      var y = 100 + i * 60; // row
      rect(x, y, 50, 50);
      // a[i] gets one of the elements in array a,
      // which is also an array, so you can just
      // add [j] to it, to get the next element
      // out of it.
     // text(a[i][j], x, y);
    }
  }
  pop();
}  










