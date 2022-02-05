const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url, ' and ', req.method);
    res.setHeader('Content-Type', 'text/html');
    res.write('<h1>hello, ninjas<h1>');
    res.write('wassup');
    res.end();
});

server.listen(3000,'localhost', ()=> {
    console.log('listening on host 3000');
})

// 100 range - informational responses
// 200 range - success codes
// 300 range - codes for redirects
// 400 range - user or client error codes
// 500 range - server error codes