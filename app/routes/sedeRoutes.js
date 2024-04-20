const express = require("express");
const router = express.Router();
const sedeController = require("../controllers/sedeController");

router.post("/api/crear-sede", sedeController.crearSede);

router.get("/api/sedes", sedeController.obtenerSedes);

module.exports = router;
