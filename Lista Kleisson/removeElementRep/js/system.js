function semRep() {
  let arr = document.getElementById("nome").value;
  let vistos = {};
  let resultado = [];

  for (let i = 0; i < arr.length; i++) {
      if (!vistos[arr[i]]) {
          resultado.push(arr[i]);
          vistos[arr[i]] = true;
      }
  }

  document.getElementById("resultado").value = resultado;
}

