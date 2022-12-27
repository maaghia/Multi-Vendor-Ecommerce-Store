const express = require("express");
const {
  createProduct,
  getProducts,
  getProduct,
  getProductsByUser,
  getProductCategory,
  updateProduct,
  deleteProduct,
} = require("../controllers/Product");

const router = express.Router();
const AuthMiddleware = require("../middlewares/Auth");

//router.use(AuthMiddleware);

// GET all Product
router.get("/", getProducts);

// GET a single Product by it's ID
router.get("/:id", getProduct);

//get products by category
router.get("/category/:category", getProductCategory);

//get products by user (postedBy)
router.get("/postedBy/:postedBy", getProductsByUser);

// POST Create a new Product
router.post("/", createProduct);

// PATCH Update a Product by it's id
router.patch("/:id", updateProduct);

// DELETE delete a Product by it's ID
router.delete("/:id", deleteProduct);

module.exports = router;