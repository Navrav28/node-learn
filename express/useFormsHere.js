// =====================================================================

// this method works for vanilla js syntax and some changes in package.json is required to run this code like "type": "commonjs"
// const express = require('express');
// =====================================================================
// this method works for es6 module syntax
import express from "express";
import path from "path";
import HomePage from "./pages/home.js";
import AboutPage from "./pages/about.js";
import loginpage from "./pages/login.js";
import submitpage from "./pages/submit.js";
// =====================================================================
const app = express();
const port = 3400;

// app.use(express.static(path.join(__dirname, "filesData")));

// creating js files from different paths and use here
app.get("/", (req, resp) => {
  resp.send(HomePage());
});
app.get("/login", (req, resp) => {
  resp.send(loginpage());
});
app.post("/submit", (req, resp) => {
  resp.send(submitpage());
});
// app.post('/', (req, resp) => {
//     resp.send("this is post request");
// })
// app.put('/user', (req, resp) => {
//     resp.send("this is put request");
// })
// app.delete('/user', (req, resp) => {
//     resp.send("this is delete request");
// })

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
