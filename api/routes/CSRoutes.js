const express = require("express");
const router = express.Router();
const CSController = require("../controller/CSController");

router.post("/cs", CSController.CSPost);
router.get("/cs", CSController.CSGet);

module.exports = router;