const express = require("express");
const router = express.Router();
const McomController = require("../controller/McomController");

router.post("/mcom" , McomController.McomPost);
router.get("/mcom" , McomController.McomGet);

module.exports = router;