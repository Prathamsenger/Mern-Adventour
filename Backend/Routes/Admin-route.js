const express = require('express');
const routers = express.Router();
const { formHandler } = require('../Controllers/Admin-controller');



router.post('/form', formHandler);

module.exports = routers;
