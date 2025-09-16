// hendle request from browser 

const http = require('http');
http.createServer((req, resp) => {
    // resp.write("")
    console.log(req.url);
    if (req.url == '/') {
        resp.write(" <h1>home page</h1>");
        
    }
    else if (req.url == '/Login') {
        resp.write(" <h1>login page</h1>");
        
        
    }
    else {
        resp.write("404 error page");
    }
    resp.end('hello');

}).listen(3000, () => {
    console.log("running 3000 port");
})

//  app.get('/users/:id', (req, res) => {
//         const userId = req.params.id; // userId will be '123'
//         console.log(`Requested user ID: ${userId}`);
//         res.send(`User ID: ${userId}`);
//     });