function clickIdade(){
  document.getElementById("idade").value = '';
}

function calcularTarifa(){
  idade = document.getElementById("idade").value
  estudante = document.getElementById("estudante").value
  if (idade<6) {
    document.getElementById("resultado").value = "tarifa é " + 0 + "R$";
  }
  else if (estudante == "sim"){
    document.getElementById("resultado").value = "tarifa é " + 2.50 * 0.5 + "R$";
  }
  else if(idade >=60){
    document.getElementById("resultado").value = "tarifa é " + 2.50 * 0.7 + "R$";
  }
  else {
    document.getElementById("resultado").value = "tarifa é " + 2.50.toFixed(2) + "R$";
  }
}