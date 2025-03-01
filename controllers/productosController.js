const db = require('../src/model');
const { Sequelize, Op, Model, DataTypes } = require('sequelize');

let productos = {
     list: async (req, res) =>{   
        const result = await db.Producto.findAll();
        const productosArray = result.map(function(datos){
            return{
                codigo: datos.codigoBarra,
                descripcion: datos.descripcion,
                rubro: datos.rubro,
                precio: datos.precioVenta,
            }
        });
        res.json(productosArray);
    },
    create: async (req, res) => {
        // Crear el producto en la base de datos y esperar a que se complete
        const nuevoProducto = await db.Producto.create({
            codigo: datos.codigoBarra,
            descripcion: datos.descripcion,
            rubro: datos.rubro,
            precio: datos.precioVenta,
        });
        
        // Devolver los datos del producto recién creado
        return res.json({
            codigo: nuevoProducto.codigo,
            descripcion: nuevoProducto.descripcion
        });
    },
    filter: async (req, res) => {
        const result = await db.Producto.findAll({
            where: {
                rubro: req.body.rubro
            }
        });
        const filterArray = result.map(function(datos){
            return{
                codigo: datos.codigoBarra,
                descripcion: datos.descripcion,
                rubro: datos.rubro,
                precio: datos.precioVenta
            }
        });
        res.json(filterArray);

    }
};

module.exports = productos;