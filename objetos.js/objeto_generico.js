function Cliente(nome, idade, cpf, email, saldo){
    this.nome= nome
    this.idade= idade
    this.cpf= cpf
    this.email= email
    this.saldo= saldo
    this.depositar= function(valor){
        this.saldo += valor
    }
}

const vinicius = new Cliente("Vinicius", 18, "12341273498", "email@email.com", 150)

console.log(vinicius);