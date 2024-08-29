function palindromo(){
  str = document.getElementById('nome').value 
  strInversa = str.split("").reverse().join("")
  if (str == strInversa){
    document.getElementById("resultado").value = str + " é um palíndromo"
  }
  else {
    document.getElementById("resultado").value = str + " não é um palíndromo"
  }
}