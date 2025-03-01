const express = require("express");
const router = express.Router();

const productos = require("../../controllers/productosController");

router.get("/", productos.list);
router.post("/create", productos.create);
router.post("/filter", productos.filter);
module.exports = router;