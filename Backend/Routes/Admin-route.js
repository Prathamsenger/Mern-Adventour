const express = require('express');
const getAllusers = require("../Controllers/Admin-controller")

const router = express.Router();





router.route("/users").get(getAllusers)

module.exports = router;
