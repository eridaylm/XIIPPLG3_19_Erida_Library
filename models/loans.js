const {DataTypes} = require('sequelize');
const sequelize = require('../config/db');

const Loan = sequelize.define('loans', {
    book_id: {
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull:false,
    },
    loan_date: {
        type: DataTypes.DATE,
        allowNull: false,
    },
    return_date: {
        type: DataTypes.DATE,
        allowNull: true,
    },
    status: {
        type: DataTypes.STRING,
        allowNull:false,
    },

}, {
    timestamps:false
})

module.exports = Loan;