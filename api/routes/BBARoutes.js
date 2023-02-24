const express = require("express");
const router = express.Router();
const BBAController = require("../controller/BBAController");

router.post("/bba" ,BBAController.BBAPost);
router.get("bba" , BBAController.BBAGet);

module.exports = router;