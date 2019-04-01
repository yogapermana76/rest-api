require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.use(express.json())
app.use(express.urlencoded({extends: true}))

app.use('/api', require('./routes/user'))

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
})