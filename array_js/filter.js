const nomes = ['Ana', 'Marcos', 'Maria', 'Mauro']

const notas = [4.3, 7, 5, 3]

const reprovados = nomes.filter((anulo, indice) => notas[indice] < 5)

console.log(reprovados)