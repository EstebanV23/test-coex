const mongoose = require('mongoose')

const PersonSchema = mongoose.Schema({
  nombres: {
    type: String,
    required: true
  },
  apellidos: {
    type: String,
    required: true
  },
  cupoTotal: {
    type: Number,
    required: true
  },
  nit: {
    type: String,
    required: true
  },
  direccion: {
    type: String,
    required: true
  },
  cupoDisponible: {
    type: Number,
    required: true
  },
  ciudad: {
    type: String,
    required: true
  },
  telefono: {
    type: String,
    required: false
  },
  diasGracia: {
    type: Number,
    required: false
  },
  estadoCredito: {
    type: Boolean,
    required: false
  }
})

const personModelSchema = mongoose.model('Persons', PersonSchema)

module.exports = personModelSchema
