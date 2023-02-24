const mongoose = require('mongoose')

const CreditSchema = mongoose.Schema({
  pagare: {
    type: String,
    required: true
  },
  monto: {
    type: Number,
    required: true
  },
  personNit: {
    type: String,
    required: true
  },
  personNombre: {
    type: String,
    required: true
  },
  fechaCredito: {
    type: Date,
    required: true
  },
  cuotasMensuales: {
    type: Number,
    required: true
  },
  cuotaInicial: {
    type: Number,
    required: true
  },
  tasaInteres: {
    type: Number,
    required: true
  },
  fechaDesembolso: {
    type: Date,
    required: true
  },
  observaciones: {
    type: String,
    required: false
  }
})
const creditModelSchema = mongoose.model('Credit', CreditSchema)
module.exports = creditModelSchema
