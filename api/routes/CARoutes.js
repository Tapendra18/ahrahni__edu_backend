const express = require("express");
const router = express.Router();
const CAController = require("../controller/CAController");

router.post("/ca", CAController.CAPost);
router.get("/ca", CAController.CAPost);

module.exports = router;