const express = require("express");
const router = express.Router();
const temporadaController = require("../controllers/temporadaController");

router.post("/crear-temporada", temporadaController.crearTemporada);

router.get("/temporadas", temporadaController.obtenerTemporadas);

module.exports = router;
