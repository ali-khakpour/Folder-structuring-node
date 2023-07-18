const { body } = require("express-validator");

const LoginValidtor = () => [
    // body("email").isEmail().withMessage("your email is false type"),
  body("password")
    .isLength({ min: 8, max: 20 })
    .withMessage("your password most between 8 - 20"),
  body("phoneNumber")
    .isLength({ min: 11, max: 11 })
    .withMessage("phone number is not true"),
]
  



module.exports = {
    LoginValidtor
}
