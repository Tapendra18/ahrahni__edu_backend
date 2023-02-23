const express =  require("express");
const router = express.Router();
const class12Controller =  require("../controller/class12Controller");

router.post("/class12" , class12Controller.class12Post);
router.get("/class12" , class12Controller.class12Get);

module.exports = router ; 