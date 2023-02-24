const express = require('express')
const personController = require('../controllers/personController')
const personJoiSchema = require('../joiSchemas/personSchema')
const validationData = require('../middlewares/validateData')

const personRouter = express.Router()

const routesGet = ['/', '/get', '/all']
personRouter.get(routesGet, personController.getAll)

const routesGetBy = ['/:nit', '/get/:nit']
personRouter.get(routesGetBy, personController.byNit)

const routesPost = ['/', '/add', '/new']
personRouter.post(routesPost, validationData(personJoiSchema), personController.add)

const routesUpdate = ['/:nit', '/update/:nit']
personRouter.patch(routesUpdate, validationData(personJoiSchema), personController.edit)

const routesDelete = ['/:nit', '/delete/:nit']
personRouter.delete(routesDelete, personController.remove)

module.exports = personRouter
