const express = require("express");
const path = require("path");
const { engine } = require('express-handlebars');
const Handlebars = require("handlebars")
const app = express();

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.static("public"));

Handlebars.registerHelper('loud', function (aString) {
  return aString.toUpperCase()
})

app.get("/", (req, res) => {
  res.render("index", {
    firstname: "Yehuda",
    lastname: "Katz",
  });
});

app.listen(3000, () => {
  console.log("app listening on port 3000");
});
