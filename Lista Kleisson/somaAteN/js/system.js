function enter(){
  document.getElementById("resultado").value = ''
  let numero = document.getElementById("escolhaNumero").value
  for(let i=0; i <= numero; ++i){
    soma = document.getElementById("resultado").value += "+" + i;
    document.getElementById("resultado").value = eval(soma)
  }
}