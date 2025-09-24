const queryString = require("querystring");
const userDataSubmit = (req, resp) => {
  let dataBody = [];
  req.on("data", (chunk) => {
    dataBody.push(chunk);
  });
  req.on("end", () => {
    let rawData = Buffer.concat(dataBody).toString();
    let readClearData = queryString.parse(rawData);
    resp.write(`<h1>Data submitted successfully</h1>`);

    resp.write(
      `<h2>Name: ${readClearData.name}</h2><h2>Email: ${readClearData.email}</h2>`,
    );
    resp.end();
  });
};
module.exports = userDataSubmit;
