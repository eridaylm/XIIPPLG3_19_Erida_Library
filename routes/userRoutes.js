const express = require('express');
const router = express.Router();
const { getAllUsers, createUser, updateUser, deleteUser } = require('../controllers/userController');

router.get('/users', getAllUsers);
router.post('/users', createUser);
router.put('/users/:id', updateUser);  // Update user by ID
router.delete('/users/:id', deleteUser);  // Delete user by ID

module.exports = router;
