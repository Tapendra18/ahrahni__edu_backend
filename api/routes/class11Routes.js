const express = require("express");
const router = express.Router();
const class11Controller = require("../controller/class11Controller");

router.post("/class11", class11Controller.class11Post);
router.get("/class11", class11Controller.class11Get);

module.exports = router;