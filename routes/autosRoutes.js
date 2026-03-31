const express = require('express');
const router = express.Router();

const autoController = require('../controller/autosController');

// 👇 IMPORTANTE
router.get('/', autoController.autosDisponibles);
router.post('/', autoController.registrarAuto);
module.exports = router;