import express from "express";
import path from "path";
import absolutePath from "./pages/useFor404page.js";   

const app = express();

const port = 3400;

app.get("/", (req, resp) => {
  // its giving absolute path of the file and sending that file as response and if we dont use absolute path and it will give error
  const absolutePath = path.resolve("htmlFiles/home.html");
//   console.log(absolutePath);
  resp.sendFile(absolutePath);
});
app.get("/login", (req, resp) => {
  const absolutePath = path.resolve("htmlFiles/login.html");
  resp.sendFile(absolutePath);
});
app.post("/submit", (req, resp) => {
  const absolutePath = path.resolve("htmlFiles/submit.html");
  resp.sendFile(absolutePath);
});

app.use((req, resp) => {
//   const absolutePath = path.resolve("htmlFiles/page404.html");
  resp.status(404).sendFile(absolutePath);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
