const express = require("express");
const router = express.Router();

const categorias = require("../../controllers/categoriasController");

router.get("/", categorias.list);

module.exports = router;