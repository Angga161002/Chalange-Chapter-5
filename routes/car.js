const express = require("express");
const router = express.Router();
const CarControl = require("../controller/carController");

/* GET home page. */

router.get("/", CarControl.getAllCars);
router.post("/create", CarControl.addCars);
router.post("/update/:id", CarControl.updateCars);
router.get("/delete/:id", CarControl.deleteCars);

module.exports = router;
