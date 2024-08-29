

function contador() {
  str = document.getElementById("nome").value
  let vogais = 'aeiouAEIOU';  // String contendo todas as vogais (maiúsculas e minúsculas)
  let contador = 0;

  for (let i = 0; i < str.length; i++) {
      if (vogais.includes(str[i])) {
          contador++;  // Incrementa o contador se o caractere for uma vogal
      }
  }

  document.getElementById("resultado").value = contador;
}