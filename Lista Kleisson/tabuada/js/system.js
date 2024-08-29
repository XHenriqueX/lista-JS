function tabuada() {
  numero = document.getElementById('numero').value
  for(let i=0;i <= 10;++i){
    document.getElementById("resultado").value += numero + " X " + i + " = " + numero*i + ", ";
  }
}