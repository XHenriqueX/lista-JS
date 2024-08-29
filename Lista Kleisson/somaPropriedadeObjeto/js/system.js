let objeto = {
    a: 10,
    b: 20,
    c: 30
};


function somarPropriedades(obj) {
    let soma = 0;
    for (let chave in obj) {
        if (obj.hasOwnProperty(chave) && typeof obj[chave] === 'number') {
            soma += obj[chave];
        }
    }
    return soma;
}

// Teste
console.log(somarPropriedades(objeto));  // Saída: 60
