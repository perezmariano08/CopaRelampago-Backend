const express = require("express");
const router = express.Router();
const torneoController = require("../controllers/torneoController");

router.post("/api/crear-torneo", torneoController.crearTorneo);

router.get("/api/torneos", torneoController.obtenerTorneos);

module.exports = router;
