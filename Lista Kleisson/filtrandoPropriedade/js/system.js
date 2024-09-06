

function enter() {
    let novoObj = {
        nome: document.getElementById("nome").value,
        idade: document.getElementById("idade").value,
        profissao: document.getElementById("profissao").value,
        salario: document.getElementById("salario").value
    };
    let criterio = document.getElementById("criterio").value;
    document.getElementById("resultado").value = novoObj[criterio]
}

