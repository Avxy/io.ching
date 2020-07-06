//var a = [];
//a[0] = [  5,  10,  15];
//a[1] = [  2,   4,   6,  8];
//a[2] = [ 11,  12,  13, 14];
//a[3] = [500, 400, 300];

 var a = [ 
           [ 222, 223],
           [ 232, 233],
           [ 322, 323],
           [ 332, 333]
         ];

 var bbb = [ 222, 223, 232, 233, 322, 323, 332, 333];






//mouse
let bx;
let by;
let boxSize = 75;
let overBox = false;
let locked = false;
let xOffset = 0.0;
let yOffset = 0.0;
//mouse


var coin;

function setup() {
createCanvas(windowWidth, windowHeight, WEBGL);
  textAlign(CENTER, CENTER);
  rectMode(CENTER);
 
  
  
  //mouse
  bx = width / 2.0;
  by = height / 2.0;
  rectMode(RADIUS);
  strokeWeight(2);
  //mouse
  
}

function draw() {
  background(200);
 

 //coin = Math.floor(Math.random(bbb));
coin = random(bbb);  
  
 matrixM();
 
 mouseBox();  
  
  
    switch (bbb) {
    case 222:
      x = x + 1;
      break;
    case 223:
      x = x - 1;
      break;
    case 232:
      y = y + 1;
      break;
    case 233:
      y = y - 1;
      break;
    case 322:
      y = y - 1;
      break;
    case 323:
      y = y - 1;
      break;
    case 332:
      y = y - 1;
      break;
    case 333:
      y = y - 1;
      break;
  }
  
    
}//draw



function mouseBox()
{
//mouse
  push();
  translate(-width*0.5, height*-0.5);
    // Test if the cursor is over the box
  if (
    mouseX > bx - boxSize &&
    mouseX < bx + boxSize &&
    mouseY > by - boxSize &&
    mouseY < by + boxSize
  ) {
    overBox = true;
    if (!locked) {
      stroke(255);
      fill(244, 122, 158);
    }
  } else {
    stroke(156, 39, 176);
    fill(244, 122, 158);
    overBox = false;
  }

  // Draw the box
  rect(bx, by, boxSize, boxSize);
  pop();
  //mouse
}


function mousePressed() {
  if (overBox) {
    locked = true;
    console.log(coin);

    fill(255, 255, 255);
  } else {
    locked = false;
  }
  xOffset = mouseX - bx;
  yOffset = mouseY - by;
}

function mouseDragged() {
  if (locked) {
    bx = mouseX - xOffset;
    by = mouseY - yOffset;
  }
}

function mouseReleased() {
  locked = false;
}




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










