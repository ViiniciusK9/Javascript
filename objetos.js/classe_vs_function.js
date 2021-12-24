const LivroFun = function(nome, editora, paginas){
    this.gNome= nome
    this.gEditora= editora
    this.gPaginas= paginas

    this.getNome= function(){
        return this.gNome
    }
    this.getEditora= function(){
        return this.gEditora
    }
    this.getPaginas= function(){
        return this.gPaginas
    }
}


const Algoritmos2 = new LivroFun("Introdução a algoritmos", "Casa do codigo", 320)

console.log(Algoritmos2)
console.log(Algoritmos2.getNome())
console.log(Algoritmos2.getEditora())
console.log(Algoritmos2.getPaginas())


// ====================================================


class Livro{
    constructor(nome, editora, paginas){
        this.nome= nome
        this.editora= editora
        this.paginas= paginas
    }

    anunciarTitulo(){
        console.log(`Título: ${this.nome}`)
    }
    descreverLivro(){
        console.log(`O livro "${this.nome}", da editora ${this.editora}, possui ${this.paginas} páginas.`)
    }
}


// const Algoritmos = new Livro("Introdução a algoritmos", "Casa do codigo", 320)

// console.log(Algoritmos)
// Algoritmos.anunciarTitulo()
// Algoritmos.descreverLivro()


class LivroColecao extends Livro{
    constructor(nome, nomeColecao){
        super(nome)
        this.nomeColecao= nomeColecao
    }
    descreverLivroColecao(){
        console.log(`O livro "${this.nome}", pertence a colção ${this.nomeColecao}`)
    }
}

const Algoritmos = new LivroColecao("Introdução a algoritmos", "Programação básica")

Algoritmos.descreverLivroColecao()