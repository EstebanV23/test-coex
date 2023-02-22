const Credit = require('../models/CreditModel')
const Person = require('../models/PersonModel')

const creditController = {
  getAll: async (_, res) => {
    const credits = await Credit.select()
    res.json(credits)
  },
  add: async (req, res) => {
    const { personNit } = req.body
    const personUpdate = await Person.update(personNit, { estadoCredito: true })
    if (personUpdate.error) res.json(personUpdate)
    else {
      const newCredit = new Credit(req.body)
      const result = await newCredit.create()
      res.json(result)
    }
  }
}

module.exports = creditController
