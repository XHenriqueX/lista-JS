function listaPrimos() {
  limite = document.getElementById("numero").value // colocou o limite = ao input
  let primos = []; // criou um array
  for (let num = 2; num <= limite; num++) { // criou um loop para adicionar os num na função ePrimo
      if (ePrimo(num)) {
          primos.push(num);
      }
  }
  document.getElementById('resultado').value += primos //exibir
}

function ePrimo(num) { //função para saber se é primo
  if (num <= 1) {
      return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i++) { 
      if (num % i === 0) {
          return false; //dividir o número por todos os números até a raiz do num
      }
  }
  return true; 
}

