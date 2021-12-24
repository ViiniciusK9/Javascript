const salaJS = [5, 3, 7, 3, 7, 8, 4, 9, 2, 5, 4, 7, 3, 7, 5]
const salaJava = [,7 ,6, 9, 4, 5, 3, 1, 6, 4, 8, 6, 8, 4, 5, 10]
const salaPython = [9, 4, 3, 7, 2, 8, 4, 8, 9, 7, 5, 2, 5, 4, 8, 3]

 function mediaSala(notasDasSalas){
    const somaNotas = notasDasSalas.reduce((acum, atual) => atual + acum, 0)
    return somaNotas / notasDasSalas.length
 }

 console.log(`Notas da sala de Js: ${mediaSala(salaJS)}`)
 console.log(`Notas da sala de Java: ${mediaSala(salaJava)}`)
 console.log(`Notas da sala de Python: ${mediaSala(salaPython)}`)


 const notas = [10, 5, 3, 8, 9]

 const media = notas.reduce((acum, atual) => atual + acum, 0) / notas.length

 console.log(media)
