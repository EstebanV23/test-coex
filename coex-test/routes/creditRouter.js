const express = require('express')
const creditController = require('../controllers/creditController')
const creditJoiSchema = require('../joiSchemas/creditSchema')
const validationData = require('../middlewares/validateData')

const creditRouter = express.Router()

const routesGet = ['/', '/get', '/all']
creditRouter.get(routesGet, creditController.getAll)

const routesPost = ['/', '/add', '/new']
creditRouter.post(routesPost, validationData(creditJoiSchema), creditController.add)

module.exports = creditRouter
