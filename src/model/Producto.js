module.exports = (sequelize, dataTypes) => {
    let alias = 'Producto';
    let cols = {
        codigoBarra: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        descripcion: {
            type: dataTypes.STRING
        },
        rubro: {
            type: dataTypes.INTEGER
        },
        precioVenta: {
            type: dataTypes.DECIMAL
        }
    };
    let config = {
        tableName: 'mercaderias',
        timestamps: false
    };
    const Producto = sequelize.define(alias, cols, config)

    return Producto;
}