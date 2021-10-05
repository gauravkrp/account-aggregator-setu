const express = require('express');

const userController = require('../controllers/user.controller');
const awaitHandler = require('../middleware/awaitHandler.middleware');

const router = express.Router();

const { getUserById, getUserByMobile, createUser, updateUser, deleteUser } = userController;

// router.post('/login', awaitHandler(userLogin)); // login route

// user spec routes
router.get('/id/:id', awaitHandler(getUserById));
router.get('/mobile/:mobile', awaitHandler(getUserByMobile));
router.post('/', awaitHandler(createUser));
router.patch('/id/:id', awaitHandler(updateUser)); // using patch for partial update
router.delete('/id/:id', awaitHandler(deleteUser));

module.exports = router;
