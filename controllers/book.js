const express = require('express');
const router = express.Router();
const Book = require('../models/book');

// GET all books
router.get('/', async (req, res) => {
    try {
        const books = await Book.findAll();
        res.status(200).json({
            message: 'GET all books success',
            data: books
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error.message
        });
    }
});

// GET book by ID
router.get('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const book = await Book.findByPk(id);
        
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        res.status(200).json({
            message: 'GET book by ID success',
            data: book
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error.message
        });
    }
});

// POST create new book
router.post('/', async (req, res) => {
    try {
        const { title, writer, publisher, year, user_id, category_id } = req.body;
        
        // Validate required fields
        if (!title || !writer || !publisher || !year || !user_id || !category_id) {
            return res.status(400).json({ 
                message: 'All fields (title, writer, publisher, year, user_id, category_id) are required' 
            });
        }

        const newBook = await Book.create({
            title,
            writer,
            publisher,
            year,
            user_id,
            category_id
        });

        res.status(201).json({
            message: 'CREATE new book success',
            data: newBook
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error.message
        });
    }
});

// PUT update book
router.put('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const { title, writer, publisher, year, user_id, category_id } = req.body;

        const book = await Book.findByPk(id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        await book.update({
            title: title || book.title,
            writer: writer || book.writer,
            publisher: publisher || book.publisher,
            year: year || book.year,
            user_id: user_id || book.user_id,
            category_id: category_id || book.category_id
        });

        res.status(200).json({
            message: 'UPDATE book success',
            data: book
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error.message
        });
    }
});

// DELETE book
router.delete('/:id', async (req, res) => {
    try {
        const { id } = req.params;
        
        const book = await Book.findByPk(id);
        if (!book) {
            return res.status(404).json({ message: 'Book not found' });
        }

        await book.destroy();
        
        res.status(200).json({
            message: 'DELETE book success',
            data: null
        });
    } catch (error) {
        res.status(500).json({
            message: 'Server Error',
            serverMessage: error.message
        });
    }
});

module.exports = router;