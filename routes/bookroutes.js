const express = require('express');
const router = express.Router();
const bookController = require('../controllers/book');

// GET semua buku
router.get('/', bookController.getindex);

// GET buku berdasarkan ID
router.get('/:id', bookController.getByid);

// POST buku baru
router.post('/', bookController.createnew);

// PUT update buku berdasarkan ID
router.put('/:id', bookController.updateUser);

// DELETE buku berdasarkan ID
router.delete('/:id', bookController.deleteUser);

module.exports = router;
