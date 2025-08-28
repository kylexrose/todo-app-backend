const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const todoRouter = require('./routes/Todo/todoRouter')

const app = express()

app.use(logger('dev'))
app.use(cors())
app.use(express.json())
app.use('/api/todo', todoRouter)

module.exports = app