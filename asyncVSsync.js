const fs = require("fs");

// asynchronous method 
// fs.readFile("hello.txt", "utf-8", (err, data) => { 
//     if(err) {
//         console.log(err)
//     }
//     console.log(data)
// })
// console.log("end script");


// synchronous method
const data = fs.readFileSync("hello.txt", "utf-8",)
console.log(data);
console.log("end script1");