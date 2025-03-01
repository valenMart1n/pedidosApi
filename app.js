const express = require("express");

const app = express();

const methodOverride =  require('method-override');

let categorias = require("../router/categorias");
let productos = require("../router/productos");

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(methodOverride('_method'));
app.use(express.static("public"));
const cors = require('cors');
app.use(cors());

app.use("/categorias", categorias);
app.use("/productos", productos);
const port = process.env.PORT || 3030;
app.listen(port, () => console.log(`Server running on port: ${port}`));