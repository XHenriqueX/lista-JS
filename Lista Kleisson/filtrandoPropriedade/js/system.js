let pessoa = {
    nome: "João",
    idade: 25,
    profissao: "Desenvolvedor",
    salario: 5000
};

function enter() {
    let in1 = document.getElementById("nome").value;
    let in2 = document.getElementById("idade").value;
    let in3 = document.getElementById("profissao").value;
    let in4 = document.getElementById("salario").value;
    let novoObj = {
        nome: in1,
        idade: in2,
        profissao: in3,
        salario: in4
    };
    let criterio = document.getElementById("criterio").value;
    document.getElementById("resultado").value = novoObj
}

