
  function timeT()
{
 //timer  
  if (frameCount % 120 == 0 && timer > 0) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timer --;
  }
  if (timer == 0) {
    text("GAME OVER", width/2, height*0.7);
}}//timer

  function timeTT()
{
 //timer  
  if (frameCount % 1 == 0 && timerTT > 0 && timerTT < 180) { // if the frameCount is divisible by 60, then a second has passed. it will stop at 0
    timerTT ++;
  }}

function newPage()
{

//start new page   
  
  switch (timer) {
    case 8:
page01();
//page02(); 
rDisc=0;
rCoin=0; 
      break;
    case 7:
rDisc=1;
rCoin=0; 
      break;
    case 6:
textSize(36);
text('recomeçar',0,0); 
      break;
    case 5:
//page01();
page02(); 
      break;
    case 4:
text('p5.js', -200, -200);  
  let timet = millis();
  rotateX(timet / 1000);
  rotateZ(timet / 1234);   
      break;
    case 3:
//font  
textSize(16);
text(hexagrams[0][result0011],0,0);
      break;
    case 2:

push(); 
textSize(16);
text(hexagrams[0][result1100],0,0);
pop(); 
      
     break;
    case 1:
      
    break;
    
         break;
    case 0:
//page01();
page02();     
    break;

}}

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
  
//text01 = (result1010); 
//var text0011 = split(text01);    
//var text0011 = text01.join("");
  

//text  
//push(); 
//textSize(16);
//text(text01,-300,-300);
//pop();
//text  

 
//}
//function angIO()
//{
  
 
let a =str(result0011);

let aa=int(a);
 
let aaa=a.substring(0, 3); 
let aaaa=a.substring(3, 6); 

  
  switch (aaa) {
    case '000':
angInt=iEarth;
      break;
    case '001':
angInt=iMount;
      break;
    case '010':
angInt=iWater;
      break;
    case '011':
angInt=iWind;
      break;
    case '100':
angInt=iThund;
      break;
    case '101':
angInt=iFire;
      break;  
    case '110':
angInt=iLake;
      break; 
    case '111':
angInt=iSky;
      break;  
}

  
  switch (aaaa) {
    case '000':
angExt=eEarth;
      break;
    case '001':
angExt=eMount;
      break;
    case '010':
angExt=eWater;
      break;
    case '011':
angExt=eWind;
      break;
    case '100':
angExt=eThund;
      break;
    case '101':
angExt=eFire;
      break;  
    case '110':
angExt=eLake;
      break; 
    case '111':
angExt=eSky;
      break;  
}

click++;

if(click==7){click=0} 
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



