var express = require('express')
var app = express()

const port = 3000

app.get('/', function (req, res) {
  res.send('Hello World from Shivashish')
})

app.listen(port, function () {
  console.log('App listening at http://localhost:%s', port)
})
