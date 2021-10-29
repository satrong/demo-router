const http = require('http')
const fs = require('fs')

function createServer (port) {
  http.createServer((req, res) => {
    res.setHeader('content-type', 'application/json')
    res.end(JSON.stringify({ port }))
  }).listen(port)
}

createServer(3000)
createServer(3001)

function router () {
  return fs.readFileSync(process.cwd() + '/.env', 'utf8')
}

module.exports = {
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://localhost:3000',
        pathRewrite: {
          '^/api': '/'
        },
        router: router
      }
    }
  }
}
