


function enter() {
    let obj = {
        a: parseFloat(document.getElementById("num1").value),
        b: parseFloat(document.getElementById("num2").value),
        c: parseFloat(document.getElementById("num3").value)
    };
    let soma = 0;
    for (let chave in obj) {
        if (obj.hasOwnProperty(chave) && typeof obj[chave] === 'number') {
            soma += obj[chave];
        }
    }
    document.getElementById("resultado").value = soma;
}


