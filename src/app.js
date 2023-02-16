const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()
const apiRouter = require('./routes')
const cors = require('cors')
const errorHandler = require('./middlewares/errorHandler')

require('dotenv').config()

app.use(cors())

app.use(bodyParser.json())

mongoose.set('strictQuery', false)

mongoose
  .connect(process.env.CONNECT_STRING)
  .then(() => {
    console.log('Connexion à la base de données réussie')
  })
  .catch((err) => console.log(err))

app.use('/api/v1', apiRouter)
app.use(errorHandler)

app.listen(process.env.PORT, function () {})
