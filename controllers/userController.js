const User = require('../models/userModel');

// Get All Users
const getAllUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.json(users);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Create User
const createUser = async (req, res) => {
    try {
        const { username, password, name, email, phone } = req.body;
        const newUser = await User.create({ username, password, name, email, phone });
        res.json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Update User by ID
const updateUser = async (req, res) => {
    try {
        const { id } = req.params;
        const { username, password, name, email, phone } = req.body;

        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        await user.update({ username, password, name, email, phone });
        res.json({ message: "User updated successfully", user });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Delete User by ID
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;

        const user = await User.findByPk(id);
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        await user.destroy();
        res.json({ message: "User deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = { getAllUsers, createUser, updateUser, deleteUser };
