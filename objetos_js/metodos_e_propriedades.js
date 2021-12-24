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


class ClientePopanca extends Cliente{
    constructor(nome, cpf, email, saldo, saldoPoupanca){
        super(nome, cpf, email, saldo)
        this.saldoPoupanca= saldoPoupanca
    }
    depositarPoupanca(valor){
        this.saldoPoupanca += valor
    }
    exibirSaldoPoupanca(){
        console.log(this.saldoPoupanca)
    }
}


const vinicius = new ClientePopanca("Vinicius", "16238746123", "email@email.com", 100, 200)

vinicius.exibirSaldo()
vinicius.exibirSaldoPoupanca()