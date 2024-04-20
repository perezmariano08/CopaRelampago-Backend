const express = require("express");
const router = express.Router();
const temporadaController = require("../controllers/temporadaController");

router.post("/api/crear-temporada", temporadaController.crearTemporada);

router.get("/api/temporadas", temporadaController.obtenerTemporadas);

module.exports = router;
