const express = require("express");
const expressLayouts = require("express-ejs-layouts");

const app = express();
const port = process.env.PORT || 3000;
require("dotenv").config();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use(expressLayouts);

const path = require('path');

app.use("/audio", express.static(path.join(__dirname, "audio")));

app.use("/video", express.static(__dirname + "/video"));
app.use("/photo", express.static(__dirname + "/photo"));

const fileUpload = require("express-fileupload");
app.use(fileUpload());

app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

const routes = require("./server/routes/recipeRoutes.js");
app.use("/", routes);

app.listen(port, () => {
  console.log(`Server is running ${port}`);
});
