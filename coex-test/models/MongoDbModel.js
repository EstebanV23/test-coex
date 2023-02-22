const mongoose = require('mongoose')
const { config } = require('../config')

class MongoDb {
  static connect () {
    mongoose.connect(config.urlMongo, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
      .catch(error => console.error(error))
    mongoose.set('strictQuery', false)
  }
}

module.exports = MongoDb
