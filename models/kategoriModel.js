const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const Kategori = sequelize.define('kategori', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    timestamps: false
});

module.exports = Kategori;
