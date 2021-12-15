// tipo string

const texto_0 = "Olá, mundo!";
const texto_1 = 'Olá, mundo!';

const texto_2 = "12341231234";

const citacao_0 = "Eis a questão 'como citar algo'";
const citacao_1 = 'Eis a questão "como citar algo"';

console.log(citacao_0);
console.log(citacao_1);

// concatenação (+)

const meu = "Meu nome é: ";
const nome = "Vinicius";

const meuNome = meu + nome;

console.log(meuNome);

// caracteres UTF-16

const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'

console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)

// area de teste

const senha = "tamanhodessetextoé?"
console.log(senha.length)

const cidade = "chapeco";
const input = "Chapeco";

const inputMinusculo = input.toLowerCase();
console.log(inputMinusculo);
console.log(cidade == inputMinusculo);

const inputMaiusculo = input.toUpperCase();
console.log(inputMaiusculo);