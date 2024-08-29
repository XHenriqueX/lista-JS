


function clickX() {
  document.getElementById("x").value = "";
}

function clickY() {
  document.getElementById("y").value = "";
}

function divisivel(){
  let x = document.getElementById("x").value;
  let y = document.getElementById("y").value;
  if (x % y ===0) {
    document.getElementById("resultado").value = x + " é divisível por " + y;
  }
  else {
    document.getElementById("resultado").value = x + " não é divisível por " + y;
  }
}