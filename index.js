const express = require("express");
const path = require("path");
const app = express();
var hbs = require('express-hbs');

app.use(express.static("public"));

// Use `.hbs` for extensions and find partials in `views/partials`.
app.engine('hbs', hbs.express4({
  partialsDir: __dirname + '/views/partials'
}));
app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');

app.get("/", (req, res) => {
  res.render("index");
});

app.listen(3000, () => {
  console.log("app listening on port 3000");
});
