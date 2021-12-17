// função normal
function apresentar(nome){
    return `Olá, meu nome é ${nome}.`
}

//console.log(apresentar('Vinicius'));


// Arrow function
const apresentarArrow = nome => `Olá, meu nome é ${nome}.`;

const soma = (num1, num2) => num1 + num2;

// Arrow function com mais de uma linha de instrução

const somarNumerosPequenos = (num1, num2) => {
    if (num1 > 10 || num2 > 10){
        return "Somente números de 1 a 9.";
    }else {
        return num1 + num2;
    }
}


resultado =somarNumerosPequenos(1, 3);
console.log(resultado);

resultado =soma(1, 5);
console.log(resultado);

resultado =apresentarArrow('Vinicius');
console.log(resultado);
