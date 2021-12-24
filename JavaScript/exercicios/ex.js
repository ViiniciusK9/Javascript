/*
    Esses exercicios foram feitos na plataforma beecrowd (https://www.beecrowd.com.br/judge/pt)

    lista de exercicios:
    Id:         Nome:
    1001		Extremamente Básico 
    1002		Área do Círculo 
    1003		Soma Simples    
    1004		Produto Simples 
    1005		Média 1 
    1006		Média 2 
    1007		Diferença   
    1008		Salário 
    1009		Salário com Bônus
    1010		Cálculo Simples
    1011		Esfera
    1012		Área
    1013		O Maior
    1014		Consumo
    1015		Distância Entre Dois Pontos
    1038		Lanche
    1040		Média 3
    1041		Coordenadas de um Ponto
    1045		Tipos de Triângulos
    1048		Aumento de Salário
    3055		Nota Esquecida
    1016		Distância
    1018		Cédulas
    1050		DDD
    1837		Prefácio
    1943		Top N
    2057		Fuso Horário
    2235		Andando no Tempo
    1000		Hello World!

    *Coloco a resposta dentro de uma função e o nome da função corresponde ao id do
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