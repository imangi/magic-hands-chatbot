const express = require("express");
const dotenv = require("dotenv");
const configViewEngine = require("./src/config/viewEngine");
const initWebRoutes = require("./src/routes/web");
dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

configViewEngine(app);

initWebRoutes(app);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`messenger bot is running at ${PORT}`);
});
