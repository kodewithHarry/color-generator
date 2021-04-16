var red = "ff" //stores the initial value of red
var green = "00" //stores the initial value of green
var blue = "00" //stores the initial value of blue
//combinations variable stores a list of possible 

var percentageR = document.getElementById("percentred");
var percentageG = document.getElementById("percentgreen");
var percentageB = document.getElementById("percentblue")


function rgb(red, green, blue){
  
var hexValues = {
  "a":10,
  "b": 11,
  "c":12,
  "d": 13,
  "e":14,
  "f":15
}

 var r = red.split("");
 var r1 = r[0];
 var r2 = r[1];
 var g = green.split("");
 var g1 = g[0];
 var g2 = g[1];
 var b = blue.split("");
 var b1 = b[0];
 var b2 = b[1];
 
 r1 = Number(r1)
 r2 = Number(r2)
 
 if (isNaN(r1)) {
   r1 = r[0]
   switch (r1) {
     case 'a':
       r1 = hexValues["a"]
       break;
     case 'b':
       r1 = hexValues["b"]
       break;
     case 'c':
       r1 = hexValues["c"]
       break;
     case 'd':
       r1 = hexValues["d"]
       break;
     case 'e':
       r1 = hexValues["e"]
       break;
     case 'f':
       r1 = hexValues["f"]
       break;
   default:
       
       break
       // code
   }
   
 }else{
   r1 = Number(r1)
 }
 
 
 if (isNaN(r2)) {
   r2= r[1]
   switch (r2) {
     case 'a':
       r2 = hexValues["a"]
       break;
     case 'b':
       r2 = hexValues["b"]
       break;
     case 'c':
       r2 = hexValues["c"]
       break;
     case 'd':
       r2 = hexValues["d"]
       break;
     case 'e':
       r2 = hexValues["e"]
       break;
     case 'f':
       r2 = hexValues["f"]
       break;
   default:
       
       break
       // code
   }
   
}else{
     r2 = Number(r2);
   }
   
r_result = r1 * 16 + r2*1;


 g1 = Number(g1);
 g2 = Number(g2);
 
 if (isNaN(g1)) {
   g1 = g[0]
   switch (g1) {
     case 'a':
       g1 = hexValues["a"]
       break;
     case 'b':
       g1 = hexValues["b"]
       break;
     case 'c':
       r1 = hexValues["c"]
       break;
     case 'd':
       g1 = hexValues["d"]
       break;
     case 'e':
       g1 = hexValues["e"]
       break;
     case 'f':
       g1 = hexValues["f"]
       break;
   default:
       
       break
       // code
   }
   
 }else{
   g1 = Number(g1);
 }

 
 if (isNaN(g2)) {
   g2 = g[1]
   switch (g2) {
     case 'a':
       g2 = hexValues["a"]
       break;
     case 'b':
       g2 = hexValues["b"]
       break;
     case 'c':
       g2 = hexValues["c"]
       break;
     case 'd':
       g2 = hexValues["d"]
       break;
     case 'e':
       g2 = hexValues["e"]
       break;
     case 'f':
       g2 = hexValues["f"]
       break;
   default:
       
       break
       // code
   }
}else{
  g2 = Number(g2)
}

var g_result = g1 * 16 + g2 * 1;

b1 = Number(b1);
b2 = Number(b2);

 
 if (isNaN(b1)) {
   b1 = b[0]
   switch (b1) {
     case 'a':
       b1 = hexValues["a"]
       break;
     case 'b':
       b1 = hexValues["b"]
       break;
     case 'c':
       b1 = hexValues["c"]
       break;
     case 'd':
       b1 = hexValues["d"]
       break;
     case 'e':
       b1 = hexValues["e"]
       break;
     case 'f':
       b1 = hexValues["f"]
       break;
   default:
       
       break
       // code
   }
   
}else{
  b1 = Number(b1);
}

 
 if (isNaN(b2)) {
   b2 = b[1]
   switch (b2) {
     case 'a':
       b2 = hexValues["a"]
       break;
     case 'b':
       b2 = hexValues["b"]
       break;
     case 'c':
       b2 = hexValues["c"]
       break;
     case 'd':
       b2 = hexValues["d"]
       break;
     case 'e':
       b2 = hexValues["e"]
       break;
     case 'f':
       b2 = hexValues["f"]
       break;
   default:
       
       break
       // code
   }
   
}else{
  b2 = Number(b2);
}

var b_result = b1 * 16 + b2*1

var rgb = document.getElementById("rgb")
rgb.innerHTML = "RGB(" + r_result +","+ g_result +","+ b_result + ")"

  
  percentageR.innerHTML = Math.floor(((r_result)*100)/255) + "%";
  percentageG.innerHTML = Math.floor(((g_result)*100)/255) + "%";
  percentageB.innerHTML = Math.floor(((b_result)*100)/255) +"%";
  



}


        
        
var combinations = "0123456789abcdef"; 
//the screen element is stored in a variable display
var display = document.getElementById("display");
var hex = document.getElementById("hex");

//the show function is used to output and update
//the screen color
function show(){
  output = "#"+red+green+blue;
  hex.innerHTML = output;
  display.style.backgroundColor = output;
}

//when the button is clicked, two random characters are picked from the combinations variable and assigned to red. then the show method is called to update the screen display. the same logic applies to all the three buttons.

var rBtn = document.getElementById("rBtnS");
rBtn.onclick = function(){
   red = combinations[Math.floor(Math.random()* combinations.length)] + combinations[Math.floor(Math.random()*combinations.length)]
      
     show();
     rgb(red, green, blue);
    
}

var rBtnA = document.getElementById("rBtnA");
rBtnA.onclick = function(){
  red = combinations[Math.floor(Math.random()* combinations.length)] + combinations[Math.floor(Math.random()*combinations.length)]
 
//  display.style.backgroundColor = "#"+red+blue+green;
  show();
  rgb(red, green, blue);
}

var gBtnS = document.getElementById("gBtnS");
gBtnS.onclick = function(){
  green = combinations[Math.floor(Math.random()* combinations.length)] + combinations[Math.floor(Math.random()*combinations.length)]
  
  show();
  rgb(red, green, blue);
  
}

var gBtnA = document.getElementById("gBtnA");
gBtnA.onclick = function(){
  green = combinations[Math.floor(Math.random()* combinations.length)] + combinations[Math.floor(Math.random()*combinations.length)]
  show();
  rgb(red, green, blue);

}
var bBtnS = document.getElementById("bBtnS");
bBtnS.onclick = function(){
  blue = combinations[Math.floor(Math.random()* combinations.length)] + combinations[Math.floor(Math.random()*combinations.length)]
  show()
  rgb(red, green, blue);
}

var bBtnA = document.getElementById("bBtnA");
bBtnA.onclick = function(){
  blue = combinations[Math.floor(Math.random()* combinations.length)] + combinations[Math.floor(Math.random()*combinations.length)]
  show()
  rgb(red, green, blue);
}



