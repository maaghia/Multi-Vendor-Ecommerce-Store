const express = require("express");

const router = express.Router();
const {login, signup, updateUser, getUsers} = require('../controllers/User')

// Login route
router.post("/login", login);

// Signup route
router.post("/signup", signup);

//update phone nbr
router.patch("/:id", updateUser);

//get users
router.get("/", getUsers);

module.exports = router;