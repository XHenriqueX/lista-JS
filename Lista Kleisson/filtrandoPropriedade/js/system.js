let pessoa = {
    nome: "João",
    idade: 25,
    profissao: "Desenvolvedor",
    salario: 5000
};

function filtrarPropriedades(obj, criterio) {
    let novoObj = {};
    for (let chave in obj) {
        if (obj.hasOwnProperty(chave) && criterio(obj[chave], chave)) {
            novoObj[chave] = obj[chave];
        }
    }
    return novoObj;
}

// Teste: Filtrar propriedades onde o valor é maior que 1000
let propriedadesMaiorQue1000 = filtrarPropriedades(pessoa, (valor) => valor > 1000);
console.log(propriedadesMaiorQue1000);  
// Saída: { salario: 5000 }
