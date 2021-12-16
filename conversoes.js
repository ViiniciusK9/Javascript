// tipo de dado
// booleanos

// conversão implícita

const numero = 123;
const numeroString = '123';

console.log('numero === numeroString: ', numero === numeroString) // valor e tipo.
console.log('numero == numeroString: ', numero == numeroString) // valor.

console.log('numero + numeroString: ', numero + numeroString) // transformação para string e concatenação.

console.log('numero + Number(numeroString): ', numero + Number(numeroString)) // transformação para int e soma.

console.log('numero + Number("123a"): ', numero + Number('123a')) // erro devido a 123a não ser um número.

// String() -> para converter algo para string.
// Number() -> para converter algo para número. (Verificar se o que esta sendo convertido é um número.)
