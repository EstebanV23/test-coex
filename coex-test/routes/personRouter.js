const express = require('express')
const personController = require('../controllers/personController')
const personJoiSchema = require('../joiSchemas/personSchema')
const validationData = require('../middlewares/validateData')

const personRouter = express.Router()

const routesGet = ['/', '/get', '/all']
personRouter.get(routesGet, personController.getAll)

const routesPost = ['/', '/add', '/new']
personRouter.post(routesPost, validationData(personJoiSchema), personController.add)

const routesGetBy = ['/:nit', '/get/:nit']
personRouter.post(routesGetBy, personController.byNit)

module.exports = personRouter
