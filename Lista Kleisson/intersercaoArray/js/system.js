function interseccao() {
  nome1 = document.getElementById("nome1").value;
  nome2 = document.getElementById("nome2").value;
  arr1 = nome1.split("");
  arr2 = nome2.split("");
  let set1 = new Set(arr1);
  resultado = [...new Set(arr2.filter(item => set1.has(item)))];
  document.getElementById("resultado").value = resultado;
}
