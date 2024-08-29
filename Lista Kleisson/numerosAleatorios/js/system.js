function aleatorio(min, max){
  document.getElementById("resultado").value = "";
  min = parseFloat(document.getElementById("min").value);
  max = parseFloat(document.getElementById("max").value);
  let resultados = Math.floor(Math.random() * (max - min + 1)) + min;
  document.getElementById("resultado").value = resultados;
}

