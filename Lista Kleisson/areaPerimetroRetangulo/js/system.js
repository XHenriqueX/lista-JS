function clickLargura() {
  document.getElementById("largura").value = "";
};

function clickComprimento() {
  document.getElementById("comprimento").value = "";
};

function calcularArea() {
  area = document.getElementById("comprimento").value * document.getElementById("largura").value;
  document.getElementById("resultadoArea").value = area
};

function calcularPerimetro() {
  let perimetro = (2 * document.getElementById("comprimento").value) + (2 * document.getElementById("largura").value);
  document.getElementById("resultadoPerimetro").value = perimetro
};