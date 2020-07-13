function page01() {
  background(0,73,108);
    //fill(255);
 

 
  
  push();
  translate(0, 0, -34);
  noFill();
  noStroke();
  
//let a = 4;
if (rDisc==1) {
  rotateY((frameCount * -0.01));
} else {
  rotateZ(sin(frameCount * -0.01));
}
 
  texture(img1);
  circle(0,0,700);
  pop();  

 
  push();
  noStroke();
  //rotateZ(sin(frameCount * 0.01));
  rotateZ(PI*(angInt/timerTT));
  texture(img3);
  smooth();
  circle(0,0,666);
  pop();
 
  
  push();
  noStroke();
 // rotateZ(sin(frameCount * 0.005));
  rotateZ(PI*(angExt/timerTT));
  texture(img4);
  circle(0,0,666);
  pop();

  
  push();
  noStroke();
  rotateZ(sin(frameCount * 0.001));
  texture(img5);
  circle(0,3,666);
  pop();
   
    
  push();
  noStroke();
  rotateZ(frameCount * 0.05);
  texture(img2);
  circle(0,0,50);
  pop();
  
 
    


  
 //triangle(300, 100, 360, 100, 330, 40);

beginShape(TRIANGLES);
vertex(300, 300);
vertex(360, 300);
vertex(330, 240);
endShape();  


 
//coins    
  push();
  translate(300,300);
  rotateX(PI/2.0);
  rotateZ(frameCount * 0.08*rCoin);
  coins();
  pop();
  
  push();
  translate(360,300);
  rotateX(PI/2.0);
  rotateZ(frameCount * 0.08*rCoin);
  coins();
  pop();
  
  push();
  translate(330,240);
  rotateX(PI/2.0);
  rotateZ(frameCount * 0.08*rCoin);
  coins();
  pop();
//coins 

  
//font 
push(); 
textSize(16);
text('Medite\nPergunte\nClick(6 vezes)\nAnalise\nRecomeçe', -300, -300); pop(); 
//font


  
}//page01////////////////////////////////////////////
  





function coins()
{
  
 if (CountValue1 == 2) {coinCountValue1 = color(55,173,198);} 
else if (CountValue1 == 3) {coinCountValue1 = color(255);} 
  
 if (CountValue2 == 2) {coinCountValue2 = color(55,173,198);} 
else if (CountValue2 == 3) {coinCountValue2 = color(255);}   
  
 if (CountValue3 == 2) {coinCountValue3 = color(55,173,198);} 
else if (CountValue3 == 3) {coinCountValue3 = color(255);}   

//  beginShape();
//  push();
  noStroke(0);
  
   normalMaterial();
   //  specularMaterial(250);
 //   ambientMaterial(250);
 // fill(coinCountValue2);
//  rotateX(frameCount * 0.02);
//  rotateZ(frameCount * 0.02);
  cylinder(34, 8, 24, 1, 1, 1);

//  pop();
//  endShape();   
 
}  
  




function page02() {
    background(0, 73, 108);
    fill(255);

    
  //ambientLight//////////////////////////  
  let locX = mouseX - height / 2;
  let locY = mouseY - width / 2;
  
  ambientLight(144, 144, 144);
  pointLight(255, 255, 255, locX, locY, 233);
  //ambientLight////////////////////////////
    
  eHexagon();
  iHexagon();
   
  push();
  translate(width*-0.25, height*0.08);
  pointsEB();
  pop();
  
  push();
  translate(width*0.25, height*0.08);
  pointsDB();
  pop();
  
  push();
  translate(width*-0.25, height*-0.08);
  pointsEC();
  pop();
  
  push();
  translate(width*0.25, height*-0.08);
  pointsDC();
  pop();
//trigram();
  
  

  
  
  };
//draw////////////////////////////////////////////////////////  
  

  function pointsEB()
{

beginShape(POINTS);
//translate(-width*0.3, height*0);
rectMode(CENTER);


noStroke();
fill(255);  
  
n1 = rect(pE-pM, pE-pM, wS, hS);
push(); 
  fill(coinCountValue1);
n2 = rect(pE, pE-pM, wS, hS*io03);
  pop();
n3 = rect(pE+pM, pE-pM, wS, hS);
n4 = rect(pE-pM, pE, wS, hS);
  push();  
fill(coinCountValue1);
n5 = rect(pE, pE, wS, hS*io02);
   pop();
n6 = rect(pE+pM, pE, wS, hS);
n7 = rect(pE-pM, pE+pM, wS, hS);
  push();  
  fill(coinCountValue1);
n8 = rect(pE, pE+pM, wS, hS*io01);
   pop();
n9 = rect(pE+pM, pE+pM, wS, hS);

endShape();

}

function pointsDB()
{

beginShape(POINTS);
//translate(width*0.6, height*0);
rectMode(CENTER);


noStroke();
fill(255);  
  
rect(pE-pM, pE-pM, wS, hS);
push(); 
  fill(coinCountValue1);
rect(pE, pE-pM, wS, hS*io06);
  pop();
rect(pE+pM, pE-pM, wS, hS);
rect(pE-pM, pE, wS, hS);
  push();  
fill(coinCountValue1);
rect(pE, pE, wS, hS*io05);
   pop();
rect(pE+pM, pE, wS, hS);
rect(pE-pM, pE+pM, wS, hS);
  push();  
  fill(coinCountValue1);
rect(pE, pE+pM, wS, hS*io04);
   pop();
rect(pE+pM, pE+pM, wS, hS);
endShape();

}




function pointsEC()
{

beginShape(POINTS);
//translate(-width*0.3, height*0);
rectMode(CENTER);


noStroke();
fill(255);  
  
rect(pE-pM, pE-pM, wS, hS);
push(); 
  fill(coinCountValue1);
rect(pE, pE-pM, wS, hS*io09);
  pop();
rect(pE+pM, pE-pM, wS, hS);
rect(pE-pM, pE, wS, hS);
  push();  
fill(coinCountValue1);
rect(pE, pE, wS, hS*io08);
   pop();
rect(pE+pM, pE, wS, hS);
rect(pE-pM, pE+pM, wS, hS);
  push();  
  fill(coinCountValue1);
rect(pE, pE+pM, wS, hS*io07);
   pop();
rect(pE+pM, pE+pM, wS, hS);

endShape();

}

function pointsDC()
{

beginShape(POINTS);
//translate(width*0.6, height*0);
rectMode(CENTER);


noStroke();
fill(255);  
  
rect(pE-pM, pE-pM, wS, hS);
push(); 
  fill(coinCountValue1);
rect(pE, pE-pM, wS, hS*io12);
  pop();
rect(pE+pM, pE-pM, wS, hS);
rect(pE-pM, pE, wS, hS);
  push();  
fill(coinCountValue1);
rect(pE, pE, wS, hS*io11);
   pop();
rect(pE+pM, pE, wS, hS);
rect(pE-pM, pE+pM, wS, hS);
  push();  
  fill(coinCountValue1);
rect(pE, pE+pM, wS, hS*io10);
   pop();
rect(pE+pM, pE+pM, wS, hS);

endShape();

}





  
  function iHexagon()
{
  stroke(0, 73, 108);
 // angleMode(DEGREES);
  push();
  
  fill(i1);
//  translate(width * 0.5, height * 0.5);
//  rotateX(frameCount * 0.01);
//  rotateY(frameCount * 0.01);
//  rotateZ(frameCount * 0.01);
  rotate(PI/3);
  polygon(-68, 0, 34, 3);
  pop();
   
  push();
  fill(i2);
//  translate(width * 0.5, height * 0.5);
//  rotateX(frameCount * 0.01);
//  rotateY(frameCount * 0.01);
//  rotateZ(frameCount * 0.01);
  rotate((2*PI)/3);
  polygon(-68, 0, 34, 3);
  pop();
  
  push();
  fill(i3);
//  translate(width * 0.5, height * 0.5);
//  rotateX(frameCount * 0.01);
//  rotateY(frameCount * 0.01);
//  rotateZ(frameCount * 0.01);
  rotate(PI);
  polygon(-68, 0, 34, 3);
  pop();
  
  push();
  fill(i4);
//  translate(width * 0.5, height * 0.5);
//  rotateX(frameCount * 0.01);
//  rotateY(frameCount * 0.01);
//  rotateZ(frameCount * 0.01);
  rotate((4*PI)/3);
  polygon(-68, 0, 34, 3);
  pop();
  
  push();
  fill(i5);
//  translate(width * 0.5, height * 0.5);
//  rotateX(frameCount * 0.01);
//  rotateY(frameCount * 0.01);
//  rotateZ(frameCount * 0.01);
  rotate((5*PI)/3);
  polygon(-68, 0, 34, 3);
  pop();
  
  push();
  fill(i6);
//  translate(width * 0.5, height * 0.5);
//  rotateX(frameCount * 0.01);
//  rotateY(frameCount * 0.01);
//  rotateZ(frameCount * 0.01);
  rotate(2*PI);
  polygon(-68, 0, 34, 3);
  pop();
  
}

function eHexagon()
{
  stroke(0, 73, 108);
// angleMode(DEGREES);
  push();
  fill(e1);
//  translate(width * 0.5, height * 0.5);
//  rotateX(frameCount * 0.01);
//  rotateY(frameCount * 0.01);
//  rotateZ(frameCount * 0.01);
  rotate(PI/3);
  polygon(-110, 0, 55, 3);
  pop();
   
  push();
  fill(e2);
//  translate(width * 0.5, height * 0.5);
//  rotateX(frameCount * 0.01);
//  rotateY(frameCount * 0.01);
//  rotateZ(frameCount * 0.01);
  rotate((2*PI)/3);
  polygon(-110, 0, 55, 3);
  pop();
  
  push();
  fill(e3);
//  translate(width * 0.5, height * 0.5);
//  rotateX(frameCount * 0.01);
//  rotateY(frameCount * 0.01);
//  rotateZ(frameCount * 0.01);
  rotate(PI);
  polygon(-110, 0, 55, 3);
  pop();
  
  push();
  fill(e4);
//  translate(width * 0.5, height * 0.5);
//  rotateX(frameCount * 0.01);
//  rotateY(frameCount * 0.01);
//  rotateZ(frameCount * 0.01);
  rotate((4*PI)/3);
  polygon(-110, 0, 55, 3);
  pop();
  
  push();
  fill(e5);
//  translate(width * 0.5, height * 0.5);
//  rotateX(frameCount * 0.01);
//  rotateY(frameCount * 0.01);
//  rotateZ(frameCount * 0.01);
  rotate((5*PI)/3);
  polygon(-110, 0, 55, 3);
  pop();
  
  push();
  fill(e6);
//  translate(width * 0.5, height * 0.5);
//  rotateX(frameCount * 0.01);
//  rotateY(frameCount * 0.01);
//  rotateZ(frameCount * 0.01);
  rotate(2*PI);
  polygon(-110, 0, 55, 3);
  pop();
  
}


function polygon(x, y, radius, npoints, pt) {
  let angle = TWO_PI / npoints;
  beginShape();
  translate(radius, 0); 
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    let pt = vertex(sx, sy, 0);
  }

  endShape(CLOSE);
}

  
  


  
  