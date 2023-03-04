const { default: mongoose } = require("mongoose");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

const AuthMiddleware = require("../middlewares/Auth");

const generateToken = (_id) => {
  return jwt.sign({ _id }, process.env.JWT_SECRET, { expiresIn: "7d" });
};

// Login the user
const login = async (req, res) => {
  console.log('this reached')
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);

    //Create the JWT
    const token = generateToken(user._id);
    res.status(200).json({id:user._id, fullName:user.fullName, phoneNbr: user.phoneNbr, email: user.email, location: user.location, token});
  } catch (error) {
    res.status(400).json(error.message);
  }
};


// Signup the user
const signup = async (req, res) => {
  const { email, password, phoneNbr, fullName, location} = req.body;

  try {
    const user = await User.signup(email, password, phoneNbr, fullName, location);

    //Create the JWT
    const token = generateToken(user._id);

    res.status(200).json({id:user._id, fullName:user.fullName, phoneNbr: user.phoneNbr, email: user.email, location: user.location, token});
  } catch (error) {
    res.status(400).json(error.message);
  }
};

//update info (phone nbr, fullName, email, address)
const updateUser = async (req, res) => {
  const id = req.user._id;

  try {
    const user = await User.findById(id);
    // Copy the values of the body received the User object. Returns the target object.
    const updatedUser = Object.assign(user, req.body);
    console.log("before",updatedUser)
    await updatedUser.save();
    console.log("after",updatedUser)
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

//Read on User by it's ID
const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);

    if (!user) {
      return res.status(404).json({ error: "User not found!" });
    }

    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ message: "Error finding User!" });
  }
};


module.exports = { 
  login, 
  signup,
  updateUser,
  getUserCity,
  getUsers,
  getUserById,
};