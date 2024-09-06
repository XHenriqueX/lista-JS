function enter(){
  document.getElementById("resultado").value = ''
  let numero = document.getElementById("numero").value
  result = 1
  if (numero == 0 || numero == 1){
    document.getElementById("resultado").value = eval("1")
  }
  else if (numero < 0) {
    document.getElementById("resultado").value = "Erro"
  }
  else{
    for(let i=numero; i > 1; i--){
      soma = result *= i ;
     document.getElementById("resultado").value = eval(soma)
   }
  } 
 }




