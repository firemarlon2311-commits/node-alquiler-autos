const express = require('express');
const router = express.Router();

const clienteController = require('../controller/clienteController');

// Ruta para registrar un nuevo cliente
router.post('/', clienteController.registrarCliente);

// Ruta para el login de clientes
router.post('/login', clienteController.loginCliente);

// Ruta para obtener todos los clientes
router.get('/', clienteController.verclientes);

module.exports = router;
