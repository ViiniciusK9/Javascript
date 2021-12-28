// adicionando elementos em array

const notas = [7.6, 9.3, 7.5, 8.6]

console.log(notas)
console.log("Tamanho da lista: ",notas.length)

notas.push(7) // adiciona na ultima posição do array

console.log(notas)
console.log("Tamanho da lista: ",notas.length)

let media = (notas[0] + notas[1] + notas[2] + notas[3] + notas[4]) / notas.length

console.log(media)

// removendo elementos de um array

const notas = [7.6, 9.3, 7.5, 8.6]

console.log(notas)

notas.pop() // remove ultimo elemento do array

console.log(notas)

let media = (notas[0] + notas[1] + notas[2]) / notas.length

console.log(media)