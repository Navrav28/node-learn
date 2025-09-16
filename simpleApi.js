// make a simple api 

const http = require('http');
const fs = require('fs');
const userData = [
    {
        name: "naveen",
        age: 25,
        email : "nk4445@gamil.com"
    },
    {
        name: "pinku",
        age: 25,
        email : "pk45@gamil.com"
    },
    {
        name: "mohit",
        age: 25,
        email : "mt885@gamil.com"
    },
]
http.createServer((req, resp) => {
    resp.setHeader("Content-Type" , "application/json")
    resp.write(JSON.stringify(userData));
    resp.end();
    
}).listen(3000, () => {
    console.log("running 3000 port");
})