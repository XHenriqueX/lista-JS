function asteriscos() {
  linhas = document.getElementById("linhas").value
  for (let i = 1; i <= linhas; i++) {
      console.log('*'.repeat(i));
  }
}

