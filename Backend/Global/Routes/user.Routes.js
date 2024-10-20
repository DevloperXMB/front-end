// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const { registerUser } = require('../Controllers/userController');

// POST /api/users/register - Register a new user
router.post('/register', registerUser);

module.exports = router;