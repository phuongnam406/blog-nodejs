const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 4000

app.use(morgan('combined'))
app.get('/', (req, res) => {
    return res.send('<html><head></head><body><h1>Hello World!</h1></body></html>');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})