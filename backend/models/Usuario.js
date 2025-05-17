const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Usuario = sequelize.define('Usuario', {
  Nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  Rol: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isIn: [['Mesero', 'Administrador']]
    }
  },
  Email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false
  },
  PasswordHash: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  timestamps: false, // No se generarán automáticamente las columnas createdAt y updatedAt
});

module.exports = Usuario;
