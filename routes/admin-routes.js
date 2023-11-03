const express = require("express");
const { check } = require("express-validator");

const admincontrollers = require("../controllers/admin-controllers");

const fileUpload = require("../middleware/file-upload");

const router = express.Router();

router.get("/shortabouttable", admincontrollers.getshortabouttable);
router.get("/longfcabouttable", admincontrollers.getlongfcabouttable);
router.get("/longteamabouttable", admincontrollers.getlongteamabouttable);
router.get("/contactstable", admincontrollers.getcontacttable);
router.get("/newstable", admincontrollers.getnewstable);
router.get("/playertable", admincontrollers.getplayertable);
router.get("/candmtable", admincontrollers.getcandmtable);
router.get("/contactquerytable", admincontrollers.getcontactquery);

router.post(
  "/shortaboutform",
  fileUpload.single("aboutimg"),
  [
    check("shorttitle").not().isEmpty(),
    check("shortabout").isLength({ min: 5 }),
  ],
  admincontrollers.shortaboutform
  // async (req, res) => {
  //   try {
  //     if (!req.file) {
  //       return res.status(422).json({ message: 'Invalid file.' });
  //     }
      
  //     // Process and store the file as needed
      
  //     // Return a success response
  //     res.status(201).json({ message: 'File uploaded successfully.' });
  //   } catch (error) {
  //     console.error(error);
  //     res.status(500).json({ message: 'File upload failed.' });
  //   }
  // }
);


router.post(
  "/longfcaboutform",
  [
    check("aboutfclongtitle").not().isEmpty(),
    check("aboutfclong").isLength({ min: 5 }),
    // check("aboutfclongimg").not().isEmpty(),
    check("aboutfclongimg"),
  ],
  admincontrollers.longfcaboutform
);
router.post(
  "/longteamaboutform",
  [
    check("aboutteamlongtitle").not().isEmpty(),
    check("aboutteamlong").isLength({ min: 5 }),
    // check("aboutteamlongimg").not().isEmpty(),
    check("aboutteamlongimg"),
  ],
  admincontrollers.longteamaboutform
);
router.post(
  "/contactsform",
  [
    // check("phnum").matches(
    //   /^\+((?:9[679]|8[035789]|6[789]|5[90]|42|3[578]|2[1-689])|9[0-58]|8[1246]|6[0-6]|5[1-8]|4[013-9]|3[0-469]|2[70]|7|1)(?:\W*\d){0,13}\d$/
    // ),
    check("phnum").not().isEmpty(),
    check("email").normalizeEmail().isEmail().not().isEmpty(),
    check("address").not().isEmpty(),
    check("srcformap").not().isEmpty(),
  ],
  admincontrollers.contactform
);
router.post(
  "/newsform",
  [
    check("title").not().isEmpty(),
    check("newsdetail").isLength({ min: 5 }),
    check("publisher").not().isEmpty(),
    check("date").not().isEmpty(),
    // check("img").not().isEmpty(),
    check("img"),
  ],
  admincontrollers.newsform
);
router.post(
  "/playerform",
  [
    check("playername").not().isEmpty(),
    check("playerposition").not().isEmpty(),
    check("playerfblink").not().isEmpty(),
    check("playerinstalink").not().isEmpty(),
    // check("playerimg").not().isEmpty(),
    check("playerimg"),
  ],
  admincontrollers.playerform
);
router.post(
  "/candmform",
  [
    check("CandMname").not().isEmpty(),
    check("CandMposition").not().isEmpty(),
    check("CandMfblink").not().isEmpty(),
    check("CandMinstalink").not().isEmpty(),
    // check("CandMimg").not().isEmpty(),
    check("CandMimg"),
  ],
  admincontrollers.candmform
);

router.delete("/shortabouttable", admincontrollers.deleteShortabout);
router.delete("/longfcabouttable", admincontrollers.deleteLongfcabout);
router.delete("/longteamabouttable", admincontrollers.deleteLongteamabout);
router.delete("/contacttable", admincontrollers.deleteContact);
router.delete("/newstable", admincontrollers.deleteNews);
router.delete("/playertable", admincontrollers.deletePlayer);
router.delete("/candmtable", admincontrollers.deleteCandM);
router.delete("/contactquerytable", admincontrollers.deleteContactQuery);

router.post(
  "/signin",
  [
    check("name").not().isEmpty(),
    check("email").normalizeEmail().isEmail(),
    check("password").isLength({ min: 8 }),
  ],
  admincontrollers.signin
);
router.post("/login", admincontrollers.login);
router.get("/usertable", admincontrollers.usertable);

module.exports = router;
