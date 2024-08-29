function enter(){
  num = document.getElementById("numero").value
  if (num % 2 == 0) {
    document.getElementById("resultado").value = "O número " + num + " é par"
  }
  else {
    document.getElementById("resultado").value = "O número " + num + " é impar"
  }
}
