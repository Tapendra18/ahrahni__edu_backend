const express = require("express");
const router =  express.Router();
const MBAController = require("../controller/MBAController");

router.post("/mba" , MBAController.MBAPost);
router.get("/mba" , MBAController.MBAGet);

module.exports = router;