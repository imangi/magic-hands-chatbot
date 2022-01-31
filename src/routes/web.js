const express = require("express");
const homepageController = require("../controllers/homepageControllers");

const router = express.Router();

const initWebRoutes = (app) => {
  router.get("/", homepageController.getHomepage);
  router.get("/webhook", homepageController.getWebhook);
  router.post("/webhook", homepageController.postWebhook);
  router.post("/set-up-profile", homepageController.handleSetupProfile);
  router.get("/set-up-profile", homepageController.getSetUpProfilePage);
  return app.use("/", router);
};

module.exports = initWebRoutes;
