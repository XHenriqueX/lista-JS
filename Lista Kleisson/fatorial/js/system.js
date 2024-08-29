function enter(){
  document.getElementById("resultado").value = ''
  let numero = document.getElementById("numero").value
  result = 1
  for(let i=numero; i > 1; i--){
     soma = result *= i ;
    document.getElementById("resultado").value = eval(soma)
  }
 }




