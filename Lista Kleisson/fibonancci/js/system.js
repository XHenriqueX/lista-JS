function gerarFibonacci() {
  let n = document.getElementById("numero").value
  let fibSequencia = [0, 1];  // Iniciando a sequência com os dois primeiros números
  for (let i = 2; i < n; i++) {
      // O próximo número é a soma dos dois anteriores
      fibSequencia.push(fibSequencia[i - 1] + fibSequencia[i - 2]);
  }
  document.getElementById("resultado").value = fibSequencia
}

