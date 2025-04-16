const express = require('express');
const router = express.Router();
const { formHandler } = require('../Controllers/Admin-controller');



router.post('/form', formHandler);

module.exports = router;
