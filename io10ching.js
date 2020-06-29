
  function timeT()
{
 //timer  
  if (frameCount % 120 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
  if (timer == 0) {
    text("GAME OVER", width/2, height*0.7);
} }//timer



function matrix6789()
{
ccc = random(cc); 
  
  switch (ccc) {
    case 222:
      cccc = 6;
      break;
    case 223:
      cccc = 7;
      break;
    case 232:
      cccc = 7;
      break;
    case 233:
      cccc = 8;
      break;  
    case 322:
      cccc = 7;
      break;
    case 323:
      cccc = 8;
      break;
    case 332:
      cccc = 8;
      break;
    case 333:
      cccc = 9;
      break;
  }
 
  
if(click==6){click=0}      
    
switch (cccc) {
    case 6:
      ccccc = 0;
      cccccc = 1;
      break;
    case 7:
      ccccc = 1;
      cccccc = 1;
      break;
    case 8:
      ccccc = 0;
      cccccc = 0;
      break;
    case 9:
      ccccc = 1;
      cccccc = 0;
      break;

  }      
    
   switch (click) {
    case 1:
io01=ccccc;
io04=cccccc;
      break;
    case 2:
io02=ccccc;
io05=cccccc;
      break;
    case 3:
io03=ccccc;
io06=cccccc;
      break;
    case 4:
io07=ccccc;
io10=cccccc;
      break;
    case 5:
io08=ccccc;
io11=cccccc;
      break;
    case 6:
io09=ccccc;
io12=cccccc;
      break;
      

}   
    
//show result in array  
result01[click] = ccccc;
result10[click] = cccccc;
//getout the comma    
result0011 = result01.join("")    
result1100 = result10.join("") 
result1010 = result0011+result1100; 
  
text01 = (result1010); 
//var text0011 = split(text01);    
//var text0011 = text01.join("");
  

//text  
//push(); 
//textSize(16);
//text(text01,-300,-300);
//pop();
//text  
  
console.log(result1010);    

  click++;
 
}

function angIO()
{

  
  switch (result1010) {
    case 000000000000:
angInt=intSky;
angExt=extFire;
      break;
    case 100000000000:
angInt=intLake;
angExt=extWind;
      break;
    case 010000000000:
angInt=intFire;
angExt=extThund;
      break;
    case 001000000000:
angInt=intThund;
angExt=extMount;
      break;
    case 000100000000:
angInt=intEarth;
angExt=extWater;
      break;
    case 000010000000:
angInt=intMount;
angExt=extSky;
      break;  
    case 0000010000000:
angInt=intWater;
angExt=extLake;
      break; 
    case 0000001000000:
angInt=intWind;
angExt=extEath;
      break;       
 
}}


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
