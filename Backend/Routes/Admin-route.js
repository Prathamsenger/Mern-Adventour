const express = require('express');
const { getAllusers, createUser, loginUser, deleteUser, updateUser } = require('../Controllers/Admin-controller');

const router = express.Router();

router.get('/users', getAllusers);
router.post('/form', createUser);
router.post('/login', loginUser);
router.delete('/users/:id', deleteUser);
router.put('/users/:id', updateUser); // 

module.exports = router;