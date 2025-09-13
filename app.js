// const fs = require('fs')
// fs.writeFileSync('hello.txt', 'Hello from Node.js!');

// const app = require('./data.js');
// console.log(app.name);

// function add(a,b){
//     return a+b;
// }
// {
//     console.log("This is a test");

   
// }
// console.log(add(5,6));


// core modules in node js
// const fs = require("fs");
// fs.writeFileSync('hello.txt', 'Hello from Node.js!');

// const os = require("os");
// console.log(os.platform());
// console.log(os.hostname());



// create server in Node js
const http = require("http");
http.createServer((req, res) => {
    res.write('hello this is naveen ')
    // res.end() work reponse is complete 
    res.end()
}).listen(4500, () => {
    console.log(' your server is running on port 8080');
});