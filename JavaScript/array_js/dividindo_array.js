 // dividindo arrays com o metodo .slice(inicio, fim)

 const listaNum = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]

 let lista1 = listaNum.slice(0, listaNum.length/2) // se comporta do index 0 ao 9, porem usamos 10 como parametro.
 let lista2 = listaNum.slice(listaNum.length/2)

// Podemos observar que se o listaNum.length/2 for um numero com ponto flutuante, ele arredonda para baixo.

console.log(`tamanho da listaNum: ${listaNum.length}`) 
console.log(`metade do tamanho da listaNum: ${listaNum.length/2}`)

 console.log(`Lista 1: ${lista1}`) 
 console.log(`Lista 2: ${lista2}`)
