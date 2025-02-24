const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Book = sequelize.define("book", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    writer: {  // Sesuai dengan field "writer" di database
        type: DataTypes.STRING,
        allowNull: false
    },
    publisher: {
        type: DataTypes.STRING,
        allowNull: false
    },
    year: {  // Sesuai dengan field "year" di database
        type: DataTypes.INTEGER,
        allowNull: false
    },
    user_id: {  // Sesuai dengan field "user_id" di database
        type: DataTypes.INTEGER,
        allowNull: false
    },
    category_id: {  // Sesuai dengan field "category_id" di database
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: "book",
    timestamps: false
});

module.exports = Book;
