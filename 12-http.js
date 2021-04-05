const http = require('http');

const server = http.createServer((req, res) =>{
    //looking for the url property to find the endpoint the client is requesting
    if(req.url === '/'){
    res.write('Welcome to the home page');
    res.end()
    }
    if(req.url === '/about'){
        res.end('Here is our short history')
    }
    res.end(`<h1>Oops!</h1> 
    <p>We can't find the page you are looking for</p>
    <a href="/"> back home</a>
    `)
})

server.listen(5000)