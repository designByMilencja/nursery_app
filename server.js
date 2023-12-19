const { createServer } = require('http')
const { URL } = require('url')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const port = process.env.PORT || 3000;
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
  createServer((req, res) => {
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    const { pathname, searchParams } = parsedUrl

    if (pathname === '/a') {
      app.render(req, res, '/a', searchParams)
    } else if (pathname === '/b') {
      app.render(req, res, '/b', searchParams)
    } else {
      handle(req, res, parsedUrl)
    }
  }).listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})