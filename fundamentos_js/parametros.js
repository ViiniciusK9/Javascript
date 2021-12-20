// parâmetros de função

function soma(num1, num2){
    return num1 + num2;
}


//console.log(soma(10, 5));



function nomeIdade(nome, idade){
    return `Nome: ${nome}\nIdade: ${idade}`
}


// ordem de parametros
//console.log(nomeIdade(18, 'Vinicius'));
//console.log(nomeIdade('Vinicius', 18));


function multiplicacao(num1 = 1, num2 = 1){
    return num1 * num2;
}


resultado = multiplicacao(soma(4, 5), soma(3, 2));
console.log(resultado);

resultado = multiplicacao(soma(4, 5));
console.log(resultado);