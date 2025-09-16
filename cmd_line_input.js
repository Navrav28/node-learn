// const path = require('path')
// const dirPath = path.join(__dirname)
// create a dynatic port 
const http = require('http');
const argument = process.argv;
const port = argument[2];
http.createServer((req, resp) => {
    resp.write("dynamic port");
    resp.end();
}).listen(port,() => {
    console.log("your dynamic port is ready ",port)
});

