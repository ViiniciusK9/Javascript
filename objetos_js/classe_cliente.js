class Cliente {
    constructor(nome, cpf, email, saldo){
        this.nome= nome
        this.cpf= cpf
        this.email= email
        this.saldo= saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

const vinicius = new Cliente("Vinicius", "12378494123", "email@email.com", 100)

console.log(vinicius)

vinicius.exibirSaldo()

vinicius.depositar(100)

vinicius.exibirSaldo()