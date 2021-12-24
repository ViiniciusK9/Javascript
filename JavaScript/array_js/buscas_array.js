function exibeNomeNota(nomeDoAluno){
    if (matrizAlunosMedias[0].includes(nomeDoAluno)){
        let index = matrizAlunosMedias[0].indexOf(nomeDoAluno);

        return `Nome: ${matrizAlunosMedias[0][index]}\nMedia: ${matrizAlunosMedias[1][index]}`
    } else {
        return `Aluno não está cadastrado.`
    }
}


const alunos = ['João', 'juliana', 'leo', 'melissa']
const medias = [10, 5, 2, 9]

let matrizAlunosMedias = [alunos, medias]

console.log(exibeNomeNota('juliana'))