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
  }
}

module.exports = personController
