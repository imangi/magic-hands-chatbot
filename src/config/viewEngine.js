const express = require("express");
const path = require("path");
/*config view engine*/

let configViewEngine = (app) => {
  app.use(express.static("src/public"));
  //app.use("/css", express.static(path.join(__dirname + "src/public/css")));
  // app.use("/js", express.static(path.join(__dirname + "src/public/")));
  //  app.use("/images", express.static(__dirname + "src/public/images"));
  app.set("viewEngine", "ejs");
  app.set("views", "src/views");
};

module.exports = configViewEngine;
