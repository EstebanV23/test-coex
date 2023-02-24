const personModelSchema = require('../schemas/PersonSchema')

class Person {
  nombres
  apellidos
  cupoTotoal
  nit
  direccion
  cupoDisponible
  ciudad
  telefono
  diasGracia
  estadoCredito

  /**
   *
   * @param {String} nombres
   * @param {String} apellidos
   * @param {Number} cupoTotal
   * @param {String} nit
   * @param {String} direccion
   * @param {Number} cupoDisponible
   * @param {String} ciudad
   * @param {String} telefono
   * @param {Number} diasGracia
   * @param {Boolean} estadoCredito
   */
  constructor ({ nombres, apellidos, cupoTotal, nit, direccion, cupoDisponible, ciudad, telefono = null, diasGracia = 0, estadoCredito = false }) {
    this.nombres = nombres
    this.apellidos = apellidos
    this.cupoTotal = cupoTotal
    this.nit = nit
    this.direccion = direccion
    this.cupoDisponible = cupoDisponible
    this.ciudad = ciudad
    this.telefono = telefono
    this.diasGracia = diasGracia
    this.estadoCredito = estadoCredito
  }

  async create () {
    try {
      const dataPerson = this.buildData()
      const newPerson = personModelSchema(dataPerson)
      return await newPerson.save()
    } catch (e) {
      return this.buildErrorStucture(e, 'No se pudo crear la persona, por favor revise los campos')
    }
  }

  static async select () {
    try {
      const persons = await personModelSchema.find()
      return persons
    } catch (e) {
      return this.buildErrorStucture(e, 'Algo ha salido mal')
    }
  }

  static async selectBy (value) {
    try {
      const persons = await personModelSchema.find({ $or: [{ nit: new RegExp(`${value}`) }, { nombres: new RegExp(`${value}`) }] })
      if (persons === null) throw new Error('No se encontro la persona con el nit enviado')
      return persons
    } catch (e) {
      return this.buildErrorStucture(e, 'Algo ha salido mal')
    }
  }

  static async selectByOne (nit) {
    try {
      const persons = await personModelSchema.findOne({ nit })
      if (persons === null) throw new Error('No se encontro la persona con el nit enviado')
      return persons
    } catch (e) {
      return this.buildErrorStucture(e, 'Algo ha salido mal')
    }
  }

  static async update (nit, data) {
    try {
      const options = { nit }
      const persons = await personModelSchema.updateOne(options, { $set: data })
      if (!persons.matchedCount) throw new Error('No se encontró el usuario con el nit enviado')
      return persons
    } catch (e) {
      return this.buildErrorStucture(e, 'Algo ha salido mal')
    }
  }

  static async delete (nit) {
    try {
      const options = { nit }
      const persons = await personModelSchema.deleteOne(options)
      if (persons.deletedCount === 0) throw new Error('No se encontró el usuario con el nit enviado')
      return persons
    } catch (e) {
      return this.buildErrorStucture(e, 'Algo ha salido mal')
    }
  }

  buildData () {
    return {
      nombres: this.nombres,
      apellidos: this.apellidos,
      cupoTotal: this.cupoTotal,
      nit: this.nit,
      direccion: this.direccion,
      cupoDisponible: this.cupoDisponible,
      ciudad: this.ciudad,
      telefono: this.telefono,
      diasGracia: this.diasGracia,
      estadoCredito: this.estadoCredito
    }
  }

  /**
   *
   * @param {Error} error
   */
  static buildErrorStucture (error, msg) {
    return {
      error: error.message,
      msg
    }
  }
}

module.exports = Person
