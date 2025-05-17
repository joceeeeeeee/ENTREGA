const { Sequelize } = require('sequelize');

// Conexion a la base de datos PostgreSQL sin usuario y contraseña
const sequelize = new Sequelize('GestionPedidos', 'postgres', '', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false, // Desactiva los logs para hacer las consultas más limpias
  dialectOptions: {
    ssl: false // Si no necesitas SSL, desactívalo
  }
});

module.exports = sequelize;
