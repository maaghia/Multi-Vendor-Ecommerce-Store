const express = require("express");
const {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/Product");

const router = express.Router();


// GET all Product
router.get("/", getProducts);

// GET a single Product by it's ID
router.get("/:id", getProduct);

// POST Create a new Product
router.post("/", createProduct);

// PATCH Update a Product by it's id
router.patch("/:id", updateProduct);

// DELETE delete a Product by it's ID
router.delete("/:id", deleteProduct);

module.exports = router;