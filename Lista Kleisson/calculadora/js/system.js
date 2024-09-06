function igual(){
  let tela =document.getElementById("tela").value;
  let numero = eval(tela);
  document.getElementById("tela").value = numero;
}

function sete(){
  document.getElementById('tela').value += "7"
}
function oito(){
  document.getElementById('tela').value += "8"
}
function nove(){
  document.getElementById('tela').value += "9"
}
function quatro(){
  document.getElementById('tela').value += "4"
}
function cinco(){
  document.getElementById('tela').value += "5"
}
function seis(){
  document.getElementById('tela').value += "6"
}
function um(){
  document.getElementById('tela').value += "1"
}
function dois(){
  document.getElementById('tela').value += "2"
}
function tres(){
  document.getElementById('tela').value += "3"
}
function zero(){
  document.getElementById('tela').value += "0"
}
function adicao(){
  document.getElementById('tela').value += "+"
}
function multiplicacao(){
  document.getElementById('tela').value += "*"
}
function subtracao(){
  document.getElementById('tela').value += "-"
}
function divisao(){
  document.getElementById('tela').value += "/"
}
function porCento(){
  document.getElementById('tela').value += "/100"
}
function virgula(){
  document.getElementById('tela').value += "."
}
function ac(){
  document.getElementById('tela').value = ""
}