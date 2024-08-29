function juntar(array) {
  num = document.getElementById("num").value;
  array = num.split("");
  if (array.length === 0) {
      return 0;  // Ou pode lançar um erro, dependendo do seu caso de uso
  }
  
  let soma = 0;
  
  // Itera sobre cada elemento do array e soma os valores
  for (let i = 0; i < array.length; i++) {
      soma += parseFloat(array[i]);
  }
  
  // Calcula a média
  let media = soma / array.length;
  
  document.getElementById("resultado").value = media;
}