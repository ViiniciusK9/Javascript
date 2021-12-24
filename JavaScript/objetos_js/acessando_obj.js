const cliente = {
    nome:"Vinicius",
    idade:18,
    cpf:"12345678912",
    email:"vinicius@gmail.com.ogg"
}

const chaves = ["nome", "idade", "cpf", "email"]

for (let i = 0; i < chaves.length; i++) {
    const key = chaves[i];
    console.log(`${key}: ${cliente[key]}`)
}

console.log(cliente)