const jwt = require("jsonwebtoken");
const User = require("../models/User");

const AuthMiddleware = async (req, res, next) => {
  if (req.method === "GET") {
    return next();
  }

  const { authorization } = req.headers;

  if (!authorization) {
    return res.status(401).json({ error: "Authorization header missing!" });
  }

  const token = authorization.split(" ")[1];

  try {
    const { _id } = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(_id);
    //making the user accessible
    req.user = user;
    next();
  } catch (e) {
    res.status(401).json({message: e});
  } 
};

module.exports = AuthMiddleware;