const express = require('express')
const routes = express.Router();

const CepController = require('./controllers/CepController')

routes.get('/ceps', CepController.index)
routes.post('/ceps', CepController.gravarCeps)

module.exports = routes