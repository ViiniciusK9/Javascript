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


function ClientePoupanca(nome, idade, cpf, email, saldo, saldoPoup){
    Cliente.call(this, nome, idade, cpf, email, saldo);
    this.saldoPoup= saldoPoup;
}


const vinicius = new ClientePoupanca("Vinicius", 18, "12341273498", "email@email.com", 150, 200)

console.log(vinicius)

ClientePoupanca.prototype.depositarPoup = function(valor){
    this.saldoPoup += valor;
}

vinicius.depositarPoup(100);

console.log(vinicius)