var a=1;
var b=0;
var c=0;
var n;

function play(){
  if(a<10)
{
  a="0"+a;
}
if(b<10)
{
  b="0"+b;
}
if(c<10)
{
  c="0"+c;
document.getElementById("b1").disabled=true;

n=setInterval(function(){
 document.getElementById("t").innerHTML=c+':'+b+':'+a;
  a++;
  if(a==91){
     b++;
     if (b < 10)
     {
       b = "0" + b;
     }
    
     a="0"+1;
    
  }
 
  if(b==61){
   
   c++;
   if(c<10)
{
  c="0"+c;
}
   b=1;
  }
 
},100/9);

document.getElementById("b1").style.color="red";
document.getElementById("b2").style.color="black";


}
}


function pause(){
  
  clearInterval(n);
  a=1;b=0;c=0;
  
 document.getElementById('b2').style.color="red";

 document.getElementById('b1'). style.color="black";
 document.getElementById("b1").disabled=false;
 
 
}






