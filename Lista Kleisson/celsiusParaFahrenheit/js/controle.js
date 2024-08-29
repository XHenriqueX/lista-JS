
function passarParaC() {
  let subtracao = document.getElementById("f").value - 32;
  let divisao = subtracao/1.8;
  document.getElementById('c').value = divisao;
}

function passarParaF() {
  let multiplicacao = document.getElementById("c").value * 1.8;
  let soma = multiplicacao + 32;
  document.getElementById("f").value = soma;
}

function clickC() {
  document.getElementById("c").value = "";
}

function clickF() {
  document.getElementById("f").value = "";
}