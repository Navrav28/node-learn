const http = require("http");
http.createServer((req, res) => {
    res.setHeader("Content-Type","text/html")
    res.write('hello this is naveen ')
    // res.end() work reponse is complete
    res.end()
    // this function close my server 
    // process.exit()
}).listen(4300, () => {
    console.log(' your server is running on port 4300');
});