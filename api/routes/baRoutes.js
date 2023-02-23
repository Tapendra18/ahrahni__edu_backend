const express = require("express");
const router = express.Router();
const baController = require("../controller/baController");

router.post("/ba", baController.baPost);
router.get("/ba", baController.baGet);

module.exports = router;