const cepService = require('../Services/CepService')

module.exports = {

    async gravar(req, res) {
        await cepService.gravarCeps(req, res)
        return res.json('ok')
    },

    async listar(req, res) {
        const ceps = await cepService.listarCeps()
        res.json(ceps)
    }

}
