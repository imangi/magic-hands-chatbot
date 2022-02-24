const express = require("express");
const path = require("path");

/*config view engine*/

let configViewEngine = (app) => {
  app.use(
    "/images",
    express.static(path.join(__dirname, "/src/public/images"))
  );
  app.use("/js", express.static(path.join(__dirname, "/src/public/js")));
  app.use("/css", express.static(path.join(__dirname, "/src/public/css")));
  app.set("viewEngine", "ejs");
  app.set("views", "/src/views");
};
module.exports = configViewEngine;
