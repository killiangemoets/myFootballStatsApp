const express = require("express");
const router = express.Router();
const generalInfosController = require("../controllers/generalInfosController");

router.route("/teams").get(generalInfosController.getTeams);

router.route("/formations").get(generalInfosController.getFormations);

module.exports = router;
