const autosController = require("./../controllers/mercadoController");

const express = require ("express");
const router = express.Router();

router.get("/", mercadoController.home);
router.get("/login", mercadoController.login);
router.get("/registro", mercadoController.registro);

module.exports = router;