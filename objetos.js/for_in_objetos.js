const cliente ={
    nome: 'Vinicius',
    idade: 18,
    cpf: '12345678912',
    email: 'vinicius@gmail.com.ogg',
    fones: [ '172634894', '26347985523', '2634708956' ],
    dependentes: [
      { nome: 'Sara', parentesco: 'filha', dataNasc: '28/01/2003' },
      { nome: 'João Silva', parentesco: 'filho', dataNasc: '15/05/2004' }        
    ],
    saldo:150,
    depositar:function(valor){
        this.saldo += valor;
    }
}


let descricao = "";

for(let info in cliente){
    if(typeof(cliente[info]) === "object" || typeof(cliente[info]) === "function"){
        continue;
    }else{
        descricao += `${info}: ${cliente[info]}\n`
    }
}

console.log(descricao)