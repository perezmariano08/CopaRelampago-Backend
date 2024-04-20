const express = require("express");
const router = express.Router();
const anioController = require("../controllers/anioController");

router.post("/api/crear-anio", anioController.crearAnio);

router.get("/api/anios", anioController.obtenerAnios);

module.exports = router;
