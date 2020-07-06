class Povar {
  var x;
  var y;
  var label;
  
  Povar() {
    x = random(width);
    y = random(height);
   
    if(x > y) {
      label = 1;
    }else {
      label = -1;
    }
    
  }

  function show()
  {
    stroke(0);
    if (label == 1) {
      fill(255);
    } else {
      fill(0);
    }
    ellipse(x,y,8,8);
  }
}