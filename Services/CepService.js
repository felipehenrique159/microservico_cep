const axios = require('axios')
const sequelize = require('../db/sequelize')

module.exports = {

    async gravarCeps(req, res) {
        if (req.body.ceps.length > 0) {
            for (let i = 0; i < req.body.ceps.length; i++) {
                let res = await axios.get(`https://viacep.com.br/ws/${req.body.ceps[i]}/json/`)
                sequelize.query(`INSERT INTO ceps (cep,logradouro,complemento,bairro,localidade,uf,ibge,gia,ddd,siafi)
                            VALUES(
                            '${res.data.cep}',
                            '${res.data.logradouro}',
                            '${res.data.complemento}',
                            '${res.data.bairro}',
                            '${res.data.localidade}',
                            '${res.data.uf}',
                            '${res.data.ibge}',
                            '${res.data.gia}',
                            '${res.data.ddd}',
                            '${res.data.siafi}'
                            )`)
            }
        }
        return res.json('ok')
    },

    async listarCeps() {
        return await sequelize.query("select * from ceps", { type: sequelize.QueryTypes.SELECT });
    }

}
