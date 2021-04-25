const http = require('http')

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end('You made it to the homepage')
  }
  if (req.url === '/about') {
    res.end('Here is what I am all about..')
  }
})

server.listen(5000)
