const express = require("express");
const router =  express.Router();
const contactController =  require("../controller/contactController");

router.post('/contact', contactController.contactPost);
router.get('/contact', contactController.contactGet);

module.exports =  router;