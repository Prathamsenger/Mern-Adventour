const express = require("express");
const authenticateToken =require("../Middleware/Auth")

const router = express.Router();

const {login ,register}= require('../Controllers/Authcontroller');

router.route("/login").post(login);
router.route("/register").post(register);
router.get("/protected", authenticateToken, (req, res) => {
    res.status(200).json({ msg: "This is a protected route", user: req.user });
  });
  

module.exports = router;