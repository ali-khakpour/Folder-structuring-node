const { validationResult } = require("express-validator");

const checkValidator = (req, res, next) => {
  const error = validationResult(req);
  let obj = {};
  error?.errors?.forEach((err) => {
    return (obj[err.path] = err.msg);
  });

  if (Object.keys(obj).length) {
    res.send(obj);
  } else {
    next();
  }
};

module.exports = {
  checkValidator,
};
