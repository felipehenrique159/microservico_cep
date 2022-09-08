const express = require('express')
const routes = express.Router();

const CepController = require('./controllers/CepController')

routes.get('/ceps', CepController.listar)
routes.post('/ceps', CepController.gravar)

module.exports = routes
