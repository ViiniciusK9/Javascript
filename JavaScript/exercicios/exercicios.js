/*
    Esses exercicios foram feitos na plataforma beecrowd (https://www.beecrowd.com.br/judge/pt)

    OBS: As respostas estão dentro de uma função e o nome da função corresponde ao id do
    exercicio. (apenas para facilitar a organização)
*/

function bee_1001(){
    var input = require('fs').readFileSync('stdin', 'utf8');
    var lines = input.split('\n');
    
    num1 = parseInt(lines[0])
    num2 = parseInt(lines[1])
    console.log(`X = ${num1+num2}`) 
}


function bee_1002(){
    var input = require('fs').readFileSync('stdin', 'utf8');
    var lines = input.split('\n');

    let raio = parseFloat(lines[0]);
    let n = 3.14159;
    let resultado = (raio * raio) * n

    console.log(`A=${resultado.toFixed(4)}`)
}

function bee_1009(){
    let nome = lines[0];
    let salarioFixo = parseFloat(lines[1]);
    let salarioBonus = parseFloat(lines[2]) * 0.15;

    let totalSalario = salarioBonus + salarioFixo;

    console.log(`TOTAL = R$ ${totalSalario.toFixed(2)}`)
}

function bee_1047() {
    var input = require('fs').readFileSync('/dev/stdin', 'utf8');
    var lines = input.split(' ');
    
    let a = parseInt(lines[0]);
    let b = parseInt(lines[1]);
    let c = parseInt(lines[2]);
    let d = parseInt(lines[3]);

    let h = 0;
    let m = 0;

    if(a >= c){
        h = (24 - a) + c;
    }else {
        h = c - a;
    }
    if(b > d){
        m = (60 - b) + d;
    }else {
        m = d - b;
    }
    if(b > d){
        h = h - 1;
    }
    if(a == c && b < d){
        h = 0;
    }
    if(b == d){
        m = 0;
    }
        
    console.log(`O JOGO DUROU ${h} HORA(S) E ${m} MINUTO(S)`);
}

function bee_1040() {
    var input = require('fs').readFileSync('stdin', 'utf8');
    var lines = input.split('\n');
    
    let notas = lines[0].split(" ");
    let media = ((parseFloat(notas[0]) * 2) + (parseFloat(notas[1]) * 3) + (parseFloat(notas[2]) * 4) + (parseFloat(notas[3]))) / 10;
    if (media >= 7){
        console.log(`Media: ${media.toFixed(1)}\nAluno aprovado.`)
    }else if (media < 5){
        console.log(`Media: ${media.toFixed(1)}\nAluno reprovado.`)
    }else {
        console.log(`Media: ${media.toFixed(1)}\nAluno em exame.`)
        let nota_rec = parseFloat(lines[1]);
        console.log(`Nota do exame: ${nota_rec.toFixed(1)}`)
        let media_f = (media + nota_rec) / 2;
        if(nota_rec >= 5){
            console.log("Aluno aprovado.")
        }else {
            console.log("Aluno reprovado.")
        }
        console.log(`Media final: ${media_f.toFixed(1)}`)
    }
    
}