const express = require('express');
var router = express.Router();
const standsController = require('../controllers/stands.controller');
const path = require('path');

router.get("/get", standsController.getStands);

router.get("/get/:id", standsController.getStandById);

router.patch("/description/:id", standsController.updateStandDescription);

router.patch("/update/:id", standsController.updateStand);

router.delete("/delete/:id", standsController.deleteStand);

router.post("/add", standsController.createStand);

router.post("/add/picture", standsController.uploadPictureStand);

router.post("/uploading/picture-description", standsController.uploadingPictureDescription)

router.use('/picture-description', express.static(path.join(__dirname,  '../assets/stand/description')))

router.use('/picture-profile', express.static(path.join(__dirname,  '../assets/stand/profile')))


module.exports = router;