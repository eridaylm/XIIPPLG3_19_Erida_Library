const express = require('express');
const router = express.Router();
const {getindex, getByid, createnew, updateUser, deleteUser} = require('../controllers/book');

// GET semua buku
router.get('/book', getindex);

// GET buku berdasarkan ID
router.get('/book/:id',getByid);

// POST buku baru
router.post('/book', createnew);

// PUT update buku berdasarkan ID
router.put('/book/:id', updateUser);

// DELETE buku berdasarkan ID
router.delete('/book/:id', deleteUser);

module.exports = router;
