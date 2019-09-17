const path = require("path");
const express = require("express");
const hbs  = require("hbs");

const app = express();

//Paths for webpack config
const publicDirectoryPath = path.join(__dirname, "../public");
const viewsPath = path.join(__dirname, "../templates/views");
const partialsPath = path.join(__dirname, "../templates/partials");

//Setup handlebars and views location
app.set("view engine", "hbs");
app.set("views", viewsPath);
hbs.registerPartials(partialsPath);

//SETUP STATIC DIRECTORY TO SERVE
app.use(express.static(publicDirectoryPath));

app.get("", (req, res) => {
  res.render("index", {
    title: "Home page",
    author: "romfol",
  });
})

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About page",
    author: "romfol",
  });
})

app.get("/help", (req, res) => {
  res.render("help", {
    title: "Help page",
    author: "romfol",
  });
})

app.get("/weather", (req, res) => {
  if (!req.query.address) {
    return res.send({
      error: "Address is not provided"     
    })
  }

  res.send({
    forecast: 'snowing',
    location: req.query.address,
  });
})

app.get("/help/*", (req, res) => {
  res.render("404", {
    title: "404 page",
    description: "Help article not found",
    author: "romfol",
  });
})

app.get("*", (req, res) => {
  res.render("404", {
    title: "404 page",
    description: "Page not found",
    author: "romfol",
  });
})

app.listen(3000, () => {
  console.log("Server is up on port 3000");
})