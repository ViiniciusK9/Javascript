const numeros = [100, 200, 300, 400, 500, 600]

for (let i = 0; i < numeros.length; i++){
    // console.log(i, numeros[i])
}


const notas = [10, 5, 6.45, 8, 2.4]
let somaNotas = 0;
for(let i = 0; i < notas.length; i++){
    somaNotas += notas[i];
}

let media = somaNotas / notas.length;

console.log(media)

// forEach

let somaNota = 0

notas.forEach(nota => {
    somaNota += nota;
})

let media2 = somaNota / notas.length

console.log(media2)