const express = require('express');
const { revisarCookie, revisarAdmin } = require('../middlewares/auth');
const adminController = require('../controllers/adminController');

const router = express.Router();

router.post('/crear-categoria', revisarCookie, revisarAdmin, adminController.crearCategoria);
router.get('/get-categorias', revisarCookie, revisarAdmin, adminController.getCategorias);
router.post('/crear-torneo', revisarCookie, revisarAdmin, adminController.crearTorneo);
router.get('/get-torneos', revisarCookie, revisarAdmin, adminController.getTorneos);
router.post('/crear-sede', revisarCookie, revisarAdmin, adminController.crearSede);
router.get('/get-sedes', revisarCookie, revisarAdmin, adminController.getSedes);
router.post('/crear-anio', revisarCookie, revisarAdmin, adminController.crearAnio);
router.get('/get-anios', revisarCookie, revisarAdmin, adminController.getAnios);
router.post('/crear-temporada', revisarCookie, revisarAdmin, adminController.crearTemporada);
router.get('/get-temporadas', revisarCookie, revisarAdmin, adminController.getTemporadas);

module.exports = router;
