const express = require("express");

const router = express.Router();
const { login, 
        signup, 
        updateUser, 
        getUserCity,
        getUsers,
        getUserById    } = require('../controllers/User');
const AuthMiddleware = require("../middlewares/Auth");

// Login route
router.post("/login", login);

// Signup route
router.post("/signup", signup);

//update phone nbr
router.patch("/update", AuthMiddleware, updateUser);

//get users by location (city)
router.get("/city/:location", getUserCity);

//get users
router.get("/", getUsers);

//get user by id 
router.get("/:id", getUserById);

module.exports = router;