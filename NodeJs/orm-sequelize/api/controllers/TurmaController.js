const database = require('../models')


class TurmaController {
    
    // Listar todos os registros
    static async pegaTodasAsTurmas(req, res){
        try{
            const todasAsTurmas = await database.Turmas.findAll()
            return res.status(200).json(todasAsTurmas)
        }catch (error){
            return res.status(500).json(error.message)
        }
    }

    // Listar registro com id específico
    static async pegaTurmaId(req, res){
        const { id } = req.params 
        try{
            const turmaId = await database.Turmas.findOne({
                where: {
                    id: parseInt(id)
                }
            })
            return res.status(200).json(turmaId)
        }catch (error) {
            return res.status(500).json(error.message)
        }
    }

    // Criar um novo registro
    static async criaTurma(req, res){
        const novaTurma = req.body
        try{
            const novaTurmaCriada = await database.Turmas.create(novaTurma)
            return res.status(200).json(novaTurmaCriada)
        }catch (error){
            return res.status(500).json(error.message)
        }
    }

    // Atualizar um registro
    static async atualizaTurma(req, res){
        const novosDados = req.body
        const { id } = req.params
        try{
            await database.Turmas.update(novosDados, {
                where: {
                    id: parseInt(id)
                }
            })
            const turmaAtualizada = await database.Turmas.findOne({
                where: {
                    id: parseInt(id)
                }
            })
            return res.status(200).json(turmaAtualizada)
        }catch (error){
            return res.status(500).json(error.message)
        }
    }

    // Deletar um registro
    static async apagaTurma(req, res){
        const { id } = req.params
        try{
            await database.Turmas.destroy({
                where: {
                    id: parseInt(id)
                }
            })
            return res.status(200).json({ mensagem: `id ${id} deletado`})
        }catch (error){
            return res.status(500).json(error.message)
        }
    }
}

module.exports = TurmaController