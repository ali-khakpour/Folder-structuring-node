function NotFoundError(req, res, next) {
  return res.status(404).json({
    statusCode: res.statusCode,
    message: `the path ${req.url} not Found`,
  });
}



function ErrorHandler(err, req, res, next) {
  if (err) {
    return res.json({
      statusCode: res.statusCode || 500,
      message: `the error is  ${err.message} ` || "invalied server",
    });
  }
}

module.exports = { NotFoundError, ErrorHandler };
