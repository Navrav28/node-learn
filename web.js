const http = require('http');
const fs = require("fs");
http.createServer((req, resp) => {
    fs.readFile('html/web.html', "utf-8", (err,data) => {
        if (err) {
              resp.writeHead(500, { "content-type": 'text/plain' })
            resp.write(data);
            return
        }
        resp.writeHead(200, { "content-type": 'text/html' })
        resp.write(data);
        resp.end();
    })  
}).listen(5100, () => {
    console.log('runing 5100 port ')
})