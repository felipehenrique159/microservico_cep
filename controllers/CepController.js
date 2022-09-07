const axios = require('axios')

module.exports = {

    async index(req, res) {
        return res.json('teste')
    },

    async gravarCeps(req, res) {
        if (req.body.ceps.length > 0) {
            for (let i = 0; i < req.body.ceps.length; i++) {
              let res = await axios.get(`https://viacep.com.br/ws/${req.body.ceps[i]}/json/`)
              console.log(res.data);
            }
        }
        return res.json('ok')
    }

}