// boolean

const usuarioLogado = true;
const contaPaga = false;

// truthy ou falsy

// 0 -> false
// 1 -> true

console.log('0 == false: ',0 == false);
console.log("'' == false: ",'' == false);
console.log('"" == false: ',"" == false);

console.log('1 == true: ',1 == true);
console.log('1423413 == true: ',1423413 == true);
console.log('"qualquercoisa" == true: ',"qualquercoisa" == true);

console.log()
console.log('=========================')
console.log()

// null -> nulo porem informado ao sistema.
// undefined -> nada, porem sem ter iformado ao sistema.

let varNull = null;
let varUndefined;

let int = 4;
let string = 'oi';
let float = 4.3;

console.log('null: ',typeof(varNull));
console.log('undefined: ',typeof(varUndefined));
console.log('4: ',typeof(int));
console.log('oi: ',typeof(string));
console.log('4.3: ',typeof(float));
