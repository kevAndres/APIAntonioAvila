const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = sequelize.define('user', {
  iduser: {
    type: DataTypes.STRING,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING
  },
  apellido: {
    type: DataTypes.STRING
  },
  cedula: {
    type: DataTypes.STRING
  },
  email: {
    type: DataTypes.STRING
  },
  password: {
    type: DataTypes.STRING
  },
  rol: {
    type: DataTypes.STRING
  }
}, {
    tableName: 'user',
    timestamps: false
});

module.exports = User;
