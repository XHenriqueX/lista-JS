function faixaEtaria(){
  idade = document.getElementById("idade").value;
  if (idade <=12){
    document.getElementById("resultado").value = "Você é uma criança";
  }
  else if (idade <=17){
    document.getElementById("resultado").value = "Você é um adolescente";
  }
  else if (idade <=59){
    document.getElementById("resultado").value = "Você é um adulto";
  }
  else if (idade > 59){
    document.getElementById("resultado").value = "Você é um idoso";
  }
}

function clickIdade(){
  document.getElementById("idade").value = "";
}