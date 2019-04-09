console.log('hello')
const express = require('express')
const bodyParsel = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()
app.use(morgan('combine'))
app.use(bodyParsel.json())
app.use(cors())

app.get('/status', (req, res) => {
  res.send({
    message: 'hello world'
  })
})

app.listen(process.env.PORT || 8082)
