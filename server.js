
const http = require('http')
const https = require('https')


//Create + Start the server
const server = http.createServer(function(request, response) {
  console.dir(request.param)
  if (request.method == 'POST') {
    var body = ''
    request.on('data', function(data) {
      body += data
      console.log('Partial body: ' + body)

      console.log('POST')
      console.log(request);  
      const options = {
          // The Domain of the webhook for Synology Chat belongs here
          hostname: 'yourdomain.com',
          port: 5001,
          // The path behind the .com/ belongs here
          path: '/yourwebhookpathbehindthedomain',
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
  
        }
        const req = https.request(options, res => {
          console.log(`statusCode: ${res.statusCode}`)
        
          res.on('data', d => {
            process.stdout.write(d)
          })
        })
        
        req.on('error', error => {
          console.error(error)
        })
        req.write('payload={"text":"' + JSON.parse(data)["text"] + '"}');
        console.log(req);
        req.end()


    })
    request.on('end', function() {
      console.log('Body: ' + body)
      response.writeHead(200, {'Content-Type': 'text/html'})
      response.end('post received')
    })
  } else {
    console.log('GET')
    var html = `
            <html>
                <body>
                    <form method="post" action="http://localhost:3000">Name: 
                        <input type="text" name="name" />
                        <input type="submit" value="Submit" />
                    </form>
                </body>
            </html>`
    response.writeHead(200, {'Content-Type': 'text/html'})
    response.end(html)
  }
})

const port = 8008
const host = '127.0.0.1'
server.listen(port, host)
console.log(`Listening at http://${host}:${port}`)