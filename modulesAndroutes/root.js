const http = require("http");
const userForm = require("./userForm");
const userDataSubmit = require("./userDataSubmit");
http
  .createServer((req, resp) => {
    resp.writeHead(200, { "content-type": "text/html" });
    if (req.url == "/") {
      userForm(req, resp);
      }
      else if (req.url == "/submit") {
        userDataSubmit(req, resp);
      }
    // resp.write("hello this is naveen");

  })
  .listen(3000, () => {
    console.log("running 3000 port");
  });
