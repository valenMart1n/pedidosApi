module.exports = (sequelize, dataTypes) => {
    let alias = 'Categoria';
    let cols = {
        cat_id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nombre: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: 'categorias',
        timestamps: false
    };
    const Categoria = sequelize.define(alias, cols, config)

    return Categoria;
}