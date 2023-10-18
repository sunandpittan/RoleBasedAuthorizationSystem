const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    let token = req.headers.token;

    if (token) {
      next();
    } else {
      res.json("No token");
    }
  } catch (error) {
    res.json(error);
  }
};

module.exports = auth;
