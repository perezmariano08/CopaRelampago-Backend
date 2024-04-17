const express = require("express");
const router = express.Router();
const sedeController = require("../controllers/sedeController");

router.post("/crear-sede", sedeController.crearSede);

router.get("/sedes", sedeController.obtenerSedes);

module.exports = router;
