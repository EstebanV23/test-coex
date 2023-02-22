const Joi = require('joi')

const personJoiSchema = Joi.object({
  nombres: Joi.string()
    .alphanum()
    .min(3)
    .max(100)
    .required(),
  apellidos: Joi.string()
    .alphanum()
    .min(3)
    .max(100)
    .required(),
  cupoTotal: Joi.number()
    .required(),
  nit: Joi.string()
    .required(),
  direccion: Joi.string()
    .alphanum()
    .required(),
  cupoDisponible: Joi.number()
    .required(),
  ciudad: Joi.string()
    .alphanum()
    .required(),
  telefono: Joi.string(),
  diasGracia: Joi.number(),
  estadoCredito: Joi.boolean()
})

module.exports = personJoiSchema
