// const Joi = require("joi");

// const registrationValidation = Joi.object({
//   userName: Joi.string().min(6).max(50).required().messages({
//     "string.empty": "Full name is required",
//     "string.min": "Full name should have a minimum length of 6",
//     "string.max": "Full name should have a maximum length of 50",
//   }),
//   email: Joi.string().email().required().messages({
//     "string.empty": "Email is required",
//     "string.email": "Email must be a valid email address",
//   }),
//   password: Joi.string().min(8).max(30).required().messages({
//     "string.empty": "Password is required",
//     "string.min": "Password should have a minimum length of 8",
//     "string.max": "Password should have a maximum length of 30",
//   }),
// });

// // const loginValidation = Joi.object(
//   userName: Joi.string().email().required().messages({
//     "string.empty": "Email is required",
//     "string.email": "Email must be a valid email address",
//   }),
//   password: Joi.string().min(8).max(30).required().messages({
//     "string.empty": "Password is required",
//     "string.min": "Password should have a minimum length of 8",
//     "string.max": "Password should have a maximum length of 30",
//   }),
// });

// module.exports = { registrationValidation, loginValidation };