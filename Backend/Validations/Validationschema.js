const Joi = require("joi");

const registrationValidation = Joi.object({
  username: Joi.string().min(6).max(50).required().messages({
    "string.empty": "Username is required",
    "string.min": "Username should have a minimum length of 6",
    "string.max": "Username should have a maximum length of 50",
  }),
  email: Joi.string().email().required().messages({
    "string.empty": "Email is required",
    "string.email": "Email must be a valid email address",
  }),
  phone: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required()
    .messages({
      "string.empty": "Phone number is required",
      "string.pattern.base": "Phone number must be a valid 10-digit number",
    }),
  password: Joi.string().min(8).max(30).required().messages({
    "string.empty": "Password is required",
    "string.min": "Password should have a minimum length of 8",
    "string.max": "Password should have a maximum length of 30",
  }),
});

const loginValidation = Joi.object({
  email: Joi.string().email().required().messages({
    "string.empty": "Email is required",
    "string.email": "Email must be a valid email address",
  }),
  password: Joi.string().min(8).max(30).required().messages({
    "string.empty": "Password is required",
    "string.min": "Password should have a minimum length of 8",
    "string.max": "Password should have a maximum length of 30",
  }),
});

module.exports = { registrationValidation, loginValidation };