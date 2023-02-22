const express = require('express')
const { PORT } = require('./config')
const cors = require('cors')
const MongoDb = require('./models/MongoDbModel')
const personRouter = require('./routes/personRouter')
const creditRouter = require('./routes/creditRouter')

const app = express()

app.use(express.json())
app.use(cors())

MongoDb.connect()

app.use('/api/persons', personRouter)
app.use('/api/credits', creditRouter)

app.use((req, res) => {
  res.status(400).json({ error: '404 Not Found' })
})

app.listen(PORT, () => { console.log(`listening on http://localhost:${PORT}`) })
