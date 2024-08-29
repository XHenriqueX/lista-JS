function elementoFrequente() {
  let nome = document.getElementById("nome").value
  let arr = nome.split("")
  let frequencia = {};  // Objeto para armazenar a frequência de cada elemento
  let maxContagem = 0;  // Variável para armazenar a contagem máxima
  let elementoMaisFrequente = null;  // Variável para armazenar o elemento mais frequente

  // Itera sobre o array e conta a frequência de cada elemento
  for (let i = 0; i < arr.length; i++) {
      let elemento = arr[i];
      if (frequencia[elemento]) {
          frequencia[elemento]++;  // Incrementa a contagem do elemento
      } else {
          frequencia[elemento] = 1;  // Inicializa a contagem do elemento
      }

      // Verifica se este elemento tem a maior frequência até agora
      if (frequencia[elemento] > maxContagem) {
          maxContagem = frequencia[elemento];
          elementoMaisFrequente = elemento;
      }
  }

  document.getElementById("resultado").value = elementoMaisFrequente;
}


