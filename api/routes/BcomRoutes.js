const express = require("express");
const router = express.Router();
const BcomController = require("../controller/BcomController");

router.post("/bcom" , BcomController.BcomPost);
router.get("/bcom" , BcomController.BcomGet);

module.exports = router;