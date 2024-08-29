function clickNumX(){
  document.getElementById("numX").value = "";
}

function clickNumY(){
  document.getElementById("numY").value = "";
}

function comparacaoMax(){
  x= document.getElementById("numX").value;
  y= document.getElementById("numY").value;
  if(x>=y) {
    document.getElementById("resultadoMax").value = "O maior número é " + x;
  }
  else if (y>x){
    document.getElementById("resultadoMax").value = "O maior número é " + y;
  }
}
function comparacaoMin(){
  x= document.getElementById("numX").value;
  y= document.getElementById("numY").value;
  if(x<=y) {
    document.getElementById("resultadoMin").value = "O menor número é " + x;
  }
  else if (y<x){
    document.getElementById("resultadoMin").value = "O menor número é " + y;
  }
}