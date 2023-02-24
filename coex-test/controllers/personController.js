const Credit = require('../models/CreditModel')
const Person = require('../models/PersonModel')

const personController = {
  getAll: async (_, res) => {
    const persons = await Person.select()
    res.json(persons)
  },
  add: async (req, res) => {
    const newPerson = new Person(req.body)
    const result = await newPerson.create()
    res.json(result)
  },
  byNit: async (req, res) => {
    const { nit } = req.params
    const persons = await Person.selectBy('nit', nit)
    res.json(persons)
  },
  remove: async (req, res) => {
    const { nit } = req.params
    const persons = await Person.delete(nit)
    await Credit.delete(nit)
    res.json(persons)
  },
  edit: async (req, res) => {
    const { nit } = req.params
    if (req.body.nit !== nit) res.json({ error: 'No se puede cambiar el nit' })
    else {
      const persons = await Person.update(nit, req.body)
      res.json(persons)
    }
  }
}

module.exports = personController
