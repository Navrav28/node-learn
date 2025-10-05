// =====================================================================

// this method works for vanilla js syntax and some changes in package.json is required to run this code like "type": "commonjs"
// const express = require('express');
// =====================================================================
// this method works for es6 module syntax
import express from 'express';
import HomePage from './pages/home.js';
// =====================================================================
const app = express();
const port = 3400;

app.get('/', (req, resp) => {
    resp.send(HomePage());
})
app.get('/user', (req, resp) => {
    resp.send("this is /user page");
})
// app.post('/', (req, resp) => {
//     resp.send("this is post request");
// })
// app.put('/user', (req, resp) => {
//     resp.send("this is put request");
// })
// app.delete('/user', (req, resp) => {
//     resp.send("this is delete request");
// })


app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
});