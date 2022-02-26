const express = require("express");
const path = require("path");

/*config view engine*/

let configViewEngine = (app) => {
  app.use(express.static(path.join(__dirname + "./src/public")));

  app.set("viewEngine", "ejs");
  app.set("views", "./src/views");
};
module.exports = configViewEngine;
