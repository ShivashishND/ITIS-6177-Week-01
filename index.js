var http = require('http')

const port = 3000

const app = http.createServer(function (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/html' })
  res.end('Hello World from Shivashish')
})

app.listen(port, () => {
  console.log(`Server is running at ${port}`)
})
