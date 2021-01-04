const express = require('express')

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

const routes = express.Router()

routes.post('/sessions', SessionController.create) //nome do id passando ele como parametro vc obtem o nome

routes.get('/ongs', OngController.index) //imprime todas as ongs
routes.post('/ongs', OngController.create) // cria ongs

routes.get('/profile', ProfileController.index) //inprime todos os incidentes colocando apenas as informalçoes essenciais

routes.get('/incidents', IncidentController.index) //imprime uma pagina de incidentes colocando todas as informações
routes.post('/incidents', IncidentController.create) // cria oncidentes
routes.delete('/incidents/:id', IncidentController.delete)

module.exports = routes;