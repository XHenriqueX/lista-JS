function inverter() {
  str = document.getElementById("nome").value
  document.getElementById("resultado").value = str.split('').reverse().join('');
}