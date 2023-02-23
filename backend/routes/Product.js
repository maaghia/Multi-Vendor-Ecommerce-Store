const express = require("express");
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

const {
  createProduct,
  getProducts,
  getProduct,
  getProductsByUser,
  getProductCategory,
  updateProduct,
  deleteProduct,
  getProductCity,
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

//get products by city
router.get("/city/:location", getProductCity);

//get products by user (postedBy)
router.get("/postedBy/:postedBy", getProductsByUser);

// POST Create a new Product
router.post("/", AuthMiddleware, upload.single('image'),  createProduct);

// PATCH Update a Product by it's id
router.patch("/:id", updateProduct);

// DELETE delete a Product by it's ID
router.delete("/:id", deleteProduct);



module.exports = router;