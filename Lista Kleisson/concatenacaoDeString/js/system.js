let pessoa = [];

function clickName() {
  document.getElementById("name").value = ""
};

function clickAge() {
  document.getElementById("age").value = ""
};

function clickCity() {
  document.getElementById("city").value = ""
};

function storage(){
  pessoa.push(document.getElementById("name").value );
  pessoa.push(document.getElementById("age").value);
  pessoa.push(document.getElementById("city").value );
  console.log(pessoa);
};