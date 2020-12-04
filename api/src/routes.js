const express = require('express')
const TechController = require('./controllers/TechController')
const ContactController = require('./controllers/ContactController')

const routes = express.Router()

routes.get('/tech', TechController.list)
routes.post('/tech', TechController.create)
routes.put('/tech/:id', TechController.update)
routes.delete('/tech/:id', TechController.delete)

routes.post('/contact/email/send', ContactController.sendEmailContact)

module.exports = routes