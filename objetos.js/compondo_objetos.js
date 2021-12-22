const cliente = {
    nome:"Vinicius",
    idade:18,
    cpf:"12345678912",
    email:"vinicius@gmail.com.ogg",
    fones: ["172634894", "26347985523", "2634708956"]
}

cliente.dependete = {
    nome:"Sara",
    parentesco:"filha",
    dataNasc:"28/01/2003"
}

console.log(cliente)
console.log(cliente.dependete)

cliente.dependete.nome = "Sara Silva";

console.log(cliente)
console.log(cliente.dependete)