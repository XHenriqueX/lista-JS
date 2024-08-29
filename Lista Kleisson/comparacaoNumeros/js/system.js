function clickNumX(){
  document.getElementById("numX").value = "";
}

function clickNumY(){
  document.getElementById("numY").value = "";
}

function comparacao(){
  x= document.getElementById("numX").value;
  y= document.getElementById("numY").value;
  if(x>=y) {
    document.getElementById("resultado").value = "O maior número é " + x;
  }
  else if (y>x){
    document.getElementById("resultado").value = "O maior número é " + y;
  }
}