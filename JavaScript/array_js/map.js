const notas = [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]

const notasAtualizadas = notas.map(nota => {
    if (nota + 1 > 10){
        return nota = 10;
    }else {
        return nota += 1;
    }
})

console.log(notasAtualizadas)

// map string

let nomes = ['ana Julia', 'Caio vinicius', 'BIA silva']

const nomesAtualizandos = nomes.map(nome => nome.toUpperCase())

console.log(nomesAtualizandos)