const http = require('http');
const fs = require('fs');
const port = 3214;
const server = http.createServer((req,res) => {
    res.writeHead(200);
    res.end(fs.readFileSync('index.html'));
});
server.listen(port);
