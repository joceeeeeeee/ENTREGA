const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Producto = sequelize.define('Producto', {
  Nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Descripcion: {
    type: DataTypes.STRING
  },
  Precio: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false
  },
  Stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 0
    }
  },
  Estado: {
    type: DataTypes.STRING,
    defaultValue: 'Disponible',
    validate: {
      isIn: [['Disponible', 'No disponible']]
    }
  }
}, {
  timestamps: false
});

module.exports = Producto;
