const { default: mongoose } = require("mongoose");
const User = require("../models/User");
const jwt = require("jsonwebtoken");


const generateToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// Login the user
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    //Create the JWT
    const token = generateToken(user._id);
    res.status(200).json({email: user.email, token});
  } catch (error) {
    res.status(400).json(error.message);
  }
};


// Signup the user
const signup = async (req, res) => {
  const { email, password, phoneNbr} = req.body;

  try {
    const user = await User.signup(email, password, phoneNbr);

    //Create the JWT
    const token = generateToken(user._id);

    res.status(200).json({email:user.email, token});
  } catch (error) {
    res.status(400).json(error.message);
  }
};

//update info (phone nbr, fullName, address)
const updateUser = async (req, res) => {
  const id = req.user._id;

  try {
    const user = await User.findById(id);
    // Copy the values of the body received the Product object. Returns the target object.
    const updatedUser = Object.assign(user, req.body);

    await updatedUser.save();

    res.status(200).json({
      ok: true,
      message: "User Info updated successfully!",
      data: updatedUser,
    });
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

//fetch users by city
const getUserCity = async (req, res) => {
  const {location} = req.params;
  
  try {
    const users = await User.find({location}).sort({ createdAt: -1 });
    if( !users || users.length === 0){
      return res.status(404).json({ error: "No user found in this city!" });
    }
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json(error);
  }
};


// Read all Users
const getUsers = async (req, res) => {
  try {
    const users = await User.find({}).sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (error) {
    res.status(400).json(error);
  }
};


module.exports = { 
  login, 
  signup,
  updateUser,
  getUserCity,
  getUsers,
};