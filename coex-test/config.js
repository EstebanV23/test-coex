require('dotenv').config()
const config = {
  urlMongo: `mongodb+srv://${process.env.USER_MONGO}:${process.env.PASSWORD_MONGO}@${process.env.CLOUSTER_MONGO}.qltlfr6.mongodb.net/${process.env.COLLECTION_NAME}?retryWrites=true&w=majority`
}

const PORT = process.env.PORT || 3000

module.exports = { config, PORT }
