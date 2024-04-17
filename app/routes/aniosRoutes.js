const express = require("express");
const router = express.Router();
const anioController = require("../controllers/anioController");

router.post("/crear-anio", anioController.crearAnio);

router.get("/anios", anioController.obtenerAnios);

module.exports = router;
