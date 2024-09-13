const express = require('express')
const cors = require('cors')
const app = express()
const port = 7070
const bodyParser = require('body-parser')
const apiRouter = require('./routes')

app.use(cors())
app.use(
  bodyParser.json({
    type(req) {
      return true
    },
  })
)
app.use(function (req, res, next) {
  res.setHeader('Content-Type', 'application/json')
  next()
})

app.use(function (req, res, next) {
  console.log(req.url + ' ' + req.method)
  next()
})

app.use(apiRouter)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
