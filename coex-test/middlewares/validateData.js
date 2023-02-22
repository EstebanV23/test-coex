const Joi = require('joi')

/**
 *
 * @param {Joi.ObjectSchema} schema
 */
function validationData (schema, property = 'body') {
  return (req, res, next) => {
    const data = req[property]
    const validate = schema.validate(data, { abortEarly: false })

    if (validate.error) {
      res.json({ error: validate.error.message })
    } else {
      next()
    }
  }
}

module.exports = validationData
