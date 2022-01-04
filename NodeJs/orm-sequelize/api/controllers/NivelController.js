const database = require('../models')


class NivelController {
    
    // pegar todos os registros
    static async pegaTodosOsNiveis(req, res){
        try {
            const todosOsNiveis = await database.Niveis.findAll()
            return res.status(200).json(todosOsNiveis)
        }catch (error){
            return res.status(500).json(error.message)
        }
    }

    // Listar registro com id específico
    static async pegaNivelId(req, res){
        const { id } = req.params 
        try{
            const nivelId = await database.Niveis.findOne({
                where: {
                    id: parseInt(id)
                }
            })
            return res.status(200).json(nivelId)
        }catch (error) {
            return res.status(500).json(error.message)
        }
    }

    // Criar um novo registro
    static async criaNivel(req, res){
        const novoNivel = req.body
        try{
            const novoNivelCriado = await database.Niveis.create(novoNivel)
            return res.status(200).json(novoNivelCriado)
        }catch (error){
            return res.status(500).json(error.message)
        }
    }

    // Atualizar um registro
    static async atualizaNivel(req, res){
        const novosDados = req.body
        const { id } = req.params
        try{
            await database.Niveis.update(novosDados, {
                where: {
                    id: parseInt(id)
                }
            })
            const nivelAtualizado = await database.Niveis.findOne({
                where: {
                    id: parseInt(id)
                }
            })
            return res.status(200).json(nivelAtualizado)
        }catch (error){
            return res.status(500).json(error.message)
        }
    }

    // Deletar um registro
    static async apagaNivel(req, res){
        const { id } = req.params
        try{
            await database.Niveis.destroy({
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


module.exports = NivelController