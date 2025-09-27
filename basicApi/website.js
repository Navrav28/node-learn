const htttp = require("http");
const fs = require("fs");
htttp
  .createServer((req, resp) => {
    //==================================================================
    // use heder file
    let collectionHeaderData = fs.readFileSync("header.html", "utf-8");
    // fs.readFile("header.html", "utf-8", (err, headerdata) => {
    //   if (err) {
    //     resp.writeHead(500, { "content-type": "text/plain" });
    //     // resp.write(data);
    //     resp.end("internal server error ");
    //     return;
    //   }
    // //   resp.writeHead(200, { "content-type": "text/html" });
    //     // resp.write(data);
    //     collectionHeaderData = headerdata;

    // });

    //==============================================================

    //       if (req.url == "/") {
    //   fs.readFile("index.html", "utf-8", (err, data) => {
    //     if (err) {
    //       resp.writeHead(500, { "content-type": "text/plain" });
    //       // resp.write(data);
    //       resp.end("internal server error ");
    //       return;
    //       }

    //     resp.writeHead(200, { "content-type": "text/html" });
    //       // resp.write(data);
    //         console.log(collectionHeaderData);
    //     resp.end(collectionHeaderData + ""+ data);
    //   });
    // }
    let file = "index";
    if (req.url != "/") {
        file = req.url.substring(1);
    }
    console.log(file + ".html");
    if (req.url != "/style.css") {
      fs.readFile(file + ".html", "utf-8", (err, data) => {
        if (err) {
          resp.writeHead(500, { "content-type": "text/plain" });
          // resp.write(data);
          resp.end("internal server error 1 ");
          return;
        }

        resp.writeHead(200, { "content-type": "text/html" });
        // resp.write(data);
        // console.log(collectionHeaderData);
        resp.end(collectionHeaderData + "" + data);
      });
    } else if (req.url == "/style.css") {
      fs.readFile("style.css", "utf-8", (err, data) => {
        if (err) {
          resp.writeHead(500, { "content-type": "text/plain" });
          // resp.write(data);
          resp.end("internal server error 2 ");
          return;
        }
        resp.writeHead(200, { "content-type": "text/css" });
        // resp.write(data);
        resp.end(data);
      });
    }

    // resp.write("hello this is naveen");
    // resp.end();
  })
  .listen(4500, () => {
    console.log("running 4500 port");
  });
