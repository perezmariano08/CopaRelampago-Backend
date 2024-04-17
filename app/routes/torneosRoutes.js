const express = require("express");
const router = express.Router();
const torneoController = require("../controllers/torneoController");

router.post("/crear-torneo", torneoController.crearTorneo);

router.get("/torneos", torneoController.obtenerTorneos);

module.exports = router;
