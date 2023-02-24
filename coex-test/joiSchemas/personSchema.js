const Joi = require('joi')

const personJoiSchema = Joi.object({
  nombres: Joi.string()
    .min(3)
    .max(100)
    .required(),
  apellidos: Joi.string()
    .min(3)
    .max(100)
    .required(),
  cupoTotal: Joi.number()
    .required(),
  nit: Joi.string()
    .required(),
  direccion: Joi.string()
    .required(),
  cupoDisponible: Joi.number()
    .required(),
  ciudad: Joi.string()
    .required(),
  telefono: Joi.string(),
  diasGracia: Joi.number(),
  estadoCredito: Joi.boolean()
})

module.exports = personJoiSchema
