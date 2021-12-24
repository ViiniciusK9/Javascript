const cliente = {
    nome:"Vinicius",
    idade:18,
    cpf:"12345678912",
    email:"vinicius@gmail.com.ogg",
    fones: ["172634894", "26347985523", "2634708956"]
}


console.log(cliente.fones)
for (let i = 0; i < cliente.fones.length; i++) {
    const fone = cliente.fones[i];
    console.log(fone)
}
