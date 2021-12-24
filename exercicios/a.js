var input = require('fs').readFileSync('stdin', 'utf8');
var lines = input.split('\n');

let raio = parseFloat(lines[0]);
let n = 3.14159;
let resultado = (raio * raio) * n

console.log(`A=${resultado.toFixed(4)}`)