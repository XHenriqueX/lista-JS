function juntar(){
let nome1 = document.getElementById("nome1").value
let nome2 = document.getElementById("nome2").value
let arr1 = nome1.split("")
let arr2 = nome2.split("")
let resultado = arr1.concat(arr2);

document.getElementById("resultado").value = resultado; 
}