const express = require("express");
const { userModel } = require("./models/user.model");
const { NotFoundError, ErrorHandler } = require("./utils/errHandler");
const { LoginValidtor } = require("./validator/auth.validator");
const { validationResult } = require("express-validator");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

require("./config/mongo.config");

// app.post("/post", async (req, res, next) => {
//   try {
//     const { userName, phoneNumber, password } = req.body;
//     const result = await userModel.create({
//       userName,
//       phoneNumber,
//       password,
//     });
//     res.send(result)
//   } catch (error) {
//     next(error.message)
//   }
// });

// app.get("/users/:id", async(req, res, next)=>{
//     try {
//         const id = req.params.id
//         const users = await userModel.findOne({_id : id});
//         res.send(users)
//     } catch (error) {

//     }
// })

app.get("/", (req, res, next) => {
  res.send("home");
});

app.post("/login", LoginValidtor(), (req, res, next) => {
  const error = validationResult(req);
  let obj = {};
  error?.errors.forEach((err) => {
    return (obj[err.path] = err.msg);
  });
  res.send(obj);
});





app.use(NotFoundError);
app.use(ErrorHandler);
app.listen(3001, () => {
  console.log("http://localhost:3001");
});
