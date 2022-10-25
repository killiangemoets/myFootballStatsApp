const express = require("express");
const router = express.Router();
const crossesController = require("../controllers/statsController");

router.route("/crosses").get(crossesController.getCrossesStats);

module.exports = router;
