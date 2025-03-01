const db = require('../src/model');
const { Sequelize, Op, Model, DataTypes } = require('sequelize');

let categorias = {
    list: async (req, res) =>{   
        const result = await db.Categoria.findAll();
        const categoriasArray = result.map(function(datos){
            return{
                cat_id: datos.cat_id,
                nombre: datos.nombre
            }
        });
        res.json(categoriasArray);
    }
}
module.exports = categorias;