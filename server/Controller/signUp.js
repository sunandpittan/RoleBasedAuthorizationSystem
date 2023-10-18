const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const user = require("../userSchema");

const signUp = async (req, res) => {
  const { username, email, password, role } = req.body;
  const userName = await user.findOne({ username });
  const eMail = await user.findOne({ email });

  if (userName && eMail) {
    res.json("Username & email already exists");
  } else if (userName) {
    res.json("Username already exists");
  } else if (eMail) {
    res.json("Email already exists");
  } else {
    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);
    const userDetails = await user.create({
      username,
      email,
      password: hashedpassword,
      role,
    });
    res.json(userDetails);
  }
};

module.exports = signUp;
