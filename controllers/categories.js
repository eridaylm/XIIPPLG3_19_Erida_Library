const express = require('express');
const router = express.Router();
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

// Definisi Model Kategori
const Kategori = sequelize.define('Kategori', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    tableName: 'kategori',
    timestamps: false
});

// GET semua kategori
router.get('/', async (req, res) => {
    try {
        const categories = await Kategori.findAll();
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// POST tambah kategori baru
router.post('/', async (req, res) => {
    try {
        const { name } = req.body;
        if (!name) {
            return res.status(400).json({ error: 'Name is required' });
        }
        const newCategory = await Kategori.create({ name });
        res.status(201).json(newCategory);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// PUT update kategori berdasarkan ID
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { name } = req.body;

        if (!name) {
            return res.status(400).json({ error: 'Name is required' });
        }

        const category = await Kategori.findByPk(id);
        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }

        category.name = name;
        await category.save();
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE kategori berdasarkan ID
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const category = await Kategori.findByPk(id);
        if (!category) {
            return res.status(404).json({ error: 'Category not found' });
        }

        await category.destroy();
        res.status(200).json({ message: 'Category deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
