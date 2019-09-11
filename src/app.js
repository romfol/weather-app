const express = require("express");

const app = express();

app.get("", (req, res) => {
  res.send("<h2>hello</h2>");
})

app.get("/help", (req, res) => {
  res.send("helping");
})

app.get("/about", (req, res) => {
  res.send("nice app");
})

app.get("/weather", (req, res) => {
  res.send("weather page");
})

app.listen(3000, () => {
  console.log("Server is up no port 3000");
})