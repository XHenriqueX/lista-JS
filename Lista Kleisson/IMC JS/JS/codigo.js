function nome(){
let nome = document.getElementById("nome").value;
return nome;
}
function imc(peso, altura){
  peso = document.getElementById("peso").value;
  altura = document.getElementById("altura").value;
  alturaElevado = altura * altura
  let media = (peso / alturaElevado);
  return media.toFixed(1);
}

function clickAltura(){
  document.getElementById("altura").value = "";
}

function clickNome(){
  document.getElementById("nome").value = "";
}

function clickPeso(){
  document.getElementById("peso").value = "";
}

function resultado() {
  if (imc() <16.9){
    document.getElementById("resultado").value =nome() + " seu IMC é " + imc() + " e você está muito abaixo do peso";
  }
  else if (imc() <18.5){
  document.getElementById("resultado").value =nome() + " seu IMC é " + imc() + " e você está abaixo do peso";
  }
  else if (imc() <24.9){
    document.getElementById("resultado").value =nome() + " seu IMC é " + imc() + " e você está no peso normal";
  }
  else if (imc() <29.9){
    document.getElementById("resultado").value =nome() + " seu IMC é " + imc() + " e você está acima do peso";
  }
  else if (imc() <34.9){
    document.getElementById("resultado").value =nome() + " seu IMC é " + imc() + " e você está com Obesidade grau 1";
  }
  else if (imc() <40){
    document.getElementById("resultado").value =nome() + " seu IMC é " + imc() + " e você está com Obesidade grau 2";
  }
  else if (imc() >40){
    document.getElementById("resultado").value =nome() + " seu IMC é " + imc() + " e você está com Obesidade grau 3";
  }
}