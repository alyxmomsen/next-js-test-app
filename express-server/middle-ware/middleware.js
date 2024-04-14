function simpleMiddleWare(req, res, next) {
  const message = "hello from simple midlleware";
  const location = "middleware";

  console.log({ message, location });

  next();
}

module.exports = {
  simpleMiddleWare,
};
