require('dotenv').config();
const jwt = require("jsonwebtoken");

module.exports  = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader.split(' ')[1];
  try {
    jwt.verify(token, process.env.JWT_SECRET, (err,user) => {
      if (err) {
        return res.json({error: "Authentification Failed"});
      }
      req.user = user;
      next();
    })
  } catch (err) {
      return res.json({error: "Authentification Failed"});
  }
};