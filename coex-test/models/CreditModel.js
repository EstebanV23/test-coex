const creditModelSchema = require('../schemas/CreditSchema')

class Credit {
  pagare
  monto
  personNit
  personNombre
  fechaCredito
  cuotasMensuales
  cuotaInicial
  tasaInteres
  fechaDesembolso
  observaciones

  /**
   *
   * @param {String} pagare
   * @param {Number} monto
   * @param {Date} fechaCredito
   * @param {Number} cuotasMensuales
   * @param {Number} cuotaInicial
   * @param {Number} tasaInteres
   * @param {Date} fechaDesembolso
   * @param {String} Obeservaciones
   */
  constructor ({ pagare, monto, personNombre, personNit, fechaCredito, cuotasMensuales, cuotaInicial, tasaInteres, fechaDesembolso, observaciones }) {
    this.pagare = pagare
    this.monto = monto
    this.personNombre = personNombre
    this.personNit = personNit
    this.fechaCredito = fechaCredito
    this.cuotasMensuales = cuotasMensuales
    this.cuotaInicial = cuotaInicial
    this.tasaInteres = tasaInteres
    this.fechaDesembolso = fechaDesembolso
    this.observaciones = observaciones
  }

  async create () {
    try {
      const dataPerson = this.buildData()
      const newPerson = creditModelSchema(dataPerson)
      return await newPerson.save()
    } catch (e) {
      return this.buildErrorStucture(e, 'No se pudo crear el credito, por favor revise los campos')
    }
  }

  static async select () {
    try {
      const persons = await creditModelSchema.find()
      return persons
    } catch (e) {
      return this.buildErrorStucture(e, 'Algo ha salido mal')
    }
  }

  static selectBy (property, value) {
    const options = {}
    options[property] = value
  }

  static async delete (personNit) {
    try {
      const options = { personNit }
      const credit = await creditModelSchema.deleteMany(options)
      return credit
    } catch (e) {
      return this.buildErrorStucture(e, 'Algo ha salido mal')
    }
  }

  buildData () {
    return {
      pagare: this.pagare,
      monto: this.monto,
      personNombre: this.personNombre,
      personNit: this.personNit,
      fechaCredito: this.fechaCredito,
      cuotasMensuales: this.cuotasMensuales,
      cuotaInicial: this.cuotaInicial,
      tasaInteres: this.tasaInteres,
      fechaDesembolso: this.fechaDesembolso,
      observaciones: this.observaciones
    }
  }

  /**
   *
   * @param {Error} error
   */
  buildErrorStucture (error, msg) {
    return {
      error: error.message,
      msg
    }
  }
}

module.exports = Credit
