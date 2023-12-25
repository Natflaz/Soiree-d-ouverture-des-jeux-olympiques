const express = require('express');
var router = express.Router();
const commandeController = require('../controllers/commande.controller');


router.get("/get/:id", commandeController.getCommandeByUserId);

router.get("/getligne/:id", commandeController.getLigneCommandeBycommandeId);

router.post("/add", commandeController.addCommande);

router.patch("/setetatligne", commandeController.setEtatLigneCommandeExterieur);

router.get("/getSchedule/:id", commandeController.getScheduleByUserId);

module.exports = router;