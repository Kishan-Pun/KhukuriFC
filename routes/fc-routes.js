const express = require("express");

const { check } = require("express-validator");

const fccontrollers = require("../controllers/fc-controllers");

const router = express.Router();

router.get("/", fccontrollers.getfclanding);

router.get("/aboutus", fccontrollers.getabout);

router.get("/players", fccontrollers.getplayerandcm);

router.get("/contact", fccontrollers.getcontact);

// router.get('/contactquerytable', fccontrollers.getcontactquery);

router.post(
  "/contact",
  [
    check("name").not().isEmpty(),
    check("phone").not().isEmpty(),
    check("email").isEmail().not().isEmpty(),
    check("subject").not().isEmpty(),
    check("message").not().isEmpty().isLength({ min: 5 }),
    
    // check("phone").matches(
    //   /^\+((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)(?:\W*\d){0,13}\d$/
    // ),
    // check("phone").matches(/^\+\d{1,4}\d{8,15}$/),
  ],
  fccontrollers.contactqueryform
);

// router.delete('/contactquerytable', fccontrollers.deleteContactQuery)

module.exports = router;
