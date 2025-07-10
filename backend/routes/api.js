const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Test route
router.get('/test', (req, res) => {
    res.json({ message: 'API is working!' });
});

// Define routes
router.post('/users', userController.getUsers); // POST request for fetching users
router.post('/users/create', userController.createUser); // POST request for creating a user
router.post('/users/update/:id', userController.updateUser); // POST request for updating a user
router.post('/users/delete/:id', userController.deleteUser); // POST request for deleting a user

module.exports = router;