const express = require("express");
const router = express.Router();
const categoriaController = require("../controllers/categoriesController");

router.post("/crear-categoria", categoriaController.crearCategoria);

router.get("/categorias", categoriaController.obtenerCategorias);

module.exports = router;
