const listaDeChamada = ["João", "Ana", "Caio", "Lara" , "Marjorie" , "Leo"]

console.log(listaDeChamada)

// listaDeChamada.splice(1, 2, "Rodrigo") // .splice(index onde vai começar, quantos elementos vai remover, adicionar no lugar).
listaDeChamada.splice(2, 0, "Rodrigo") // podemos tambem colocar 0 no segundo parametro para não apagarmos ninguem e só adicionar alguem apartir de um index desejado.

console.log(listaDeChamada)