// const http = require("http");
// http
//   .createServer((req, resp) => {
//     resp.writeHead(200, { "content-type": "text/html" });

//     if (req.url == "/") {
//       resp.write(`   <form action="/submit" method="post">
//         <label for="">name</label>
//         <input type="text" name="name">
//         <label for="">email</label>

//         <input type="text" name="email">

//        <button type="submit">submit</button>
//     </form>`);
//       }
//     else if (req.url == '/submit')
//     {
//         resp.write("<h1>Data sumbmited </h1>")
//     }

//     resp.end();
//   })
//   .listen(4300);

const http = require("http");
const fs = require("fs");
const queryString = require("querystring");
http
  .createServer((req, res) => {
    fs.readFile("html/web.html", "utf-8", (err, data) => {
      if (err) {
        res.writeHead(500, { "content-type": "text/plain" });
        res.write(data);
        return;
      }
      res.writeHead(200, { "content-type": "text/html" });
      if (req.url == "/") {
        res.write(data);
      } else if (req.url == "/submit") {
        let dataBody = [];
        req.on("data", (chunk) => {
          dataBody.push(chunk);
        });
        req.on("end", () => {
            let rawData = Buffer.concat(dataBody).toString();
         
            //Browser body ko application/x-www-form-urlencoded format me bhejta hai.
           // querystring.parse() is string ko key-value pairs me tod deta hai.
          let readClearData = queryString.parse(rawData);
          let dataString = `name : ${readClearData.name}  email : ${readClearData.email}`;
          fs.writeFileSync("fileDataStore/"+readClearData.name+".txt", dataString);

          console.log("file Created Successfully");
        });
        res.write("<h1>Data sumbmited </h1>");
      }
      res.end();
    });
  }) 
  .listen(4300);
