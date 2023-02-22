const Joi = require('joi')

const creditJoiSchema = Joi.object({
  pagare: Joi.string()
    .alphanum()
    .min(3)
    .max(100)
    .required(),
  monto: Joi.number()
    .required(),
  personNit: Joi.string()
    .required(),
  personNombre: Joi.string()
    .required(),
  fechaCredito: Joi.date()
    .required(),
  cuotasMensuales: Joi.number()
    .required(),
  cuotaInicial: Joi.number()
    .required(),
  tasaInteres: Joi.number(),
  fechaDesembolso: Joi.date(),
  observaciones: Joi.string()
})

module.exports = creditJoiSchema
