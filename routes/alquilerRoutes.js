const express = require('express');
const router = express.Router();
const alquilerController = require('../controller/alquilerController');

// Ruta para registrar un nuevo alquiler
router.post('/', alquilerController.realizarAlquiler);

// Ruta para obtener el historial de alquileres
router.get('/', alquilerController.historial);

module.exports = router;
