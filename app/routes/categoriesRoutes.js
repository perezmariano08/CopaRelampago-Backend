const express = require("express");
const router = express.Router();
const categoriaController = require("../controllers/categoriesController");

router.post("/api/crear-categoria", categoriaController.crearCategoria);

router.get("/api/categorias", categoriaController.obtenerCategorias);
module.exports = router;
