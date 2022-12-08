const { default: mongoose } = require("mongoose");
const Product = require("../models/Product");

//Helper: Search for Product by it's id and return it back
const getAndCheckOwnership = async (id, user_id) => {
  try {
    const Product = await Product.findById(id);
    if (!Product) {
      return res.status(404).json({ message: "Product not found!" });
    }
    // Check whether this Product belongs to the signed in user
    if (!Product.postedBy.equals(user_id)) {
      throw new Error("You're not authorized to do this!");
    }
    return Product;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Create a Product
const createProduct = async (req, res) => {
  const { title, description, category} = req.body;

  //add to a database
  try {
    const product = await Product.create({
      title,
      description,
      category,
    });
    console.log(product);
    res.status(201).json(product);
  } catch (error) {
    res.status(400).json({ error: true, message: error.message });
  }
};

// Read all Products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({}).sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json(error);
  }
};

//Read on Product by it's ID
const getProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ error: "Product not found!" });
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(400).json({ message: "Error finding Product!" });
  }
};

//fetch products by category
const getProductCategory = async (req, res) => {
  const {category} = req.params;
  try {
    const products = await Product.find({category}).sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await getAndCheckOwnership(id, req.user._id);

    // Copy the values of the body received the Product object. Returns the target object.
    const updatedProduct = Object.assign(product, req.body);
    product.updateOne()

    await updatedProduct.save();

    res.status(200).json({
      ok: true,
      message: "Product updated successfully!",
      data: updatedProduct,
    });
  } catch (error) {
    return res.status(400).json(error.message);
  }
};

const deleteProduct = async (req, res) => {
  const { id } = req.params;

  try {
    const product = await getAndCheckOwnership(id, req.user._id);

    if (!product) {
      return res.status(404).json({ error: "Product not found!" });
    }

    await product.deleteOne({_id: id})

    res.status(200).json({message: "Product deleted successfully!",data:Product});
  } catch (error) {
    res.status(400).json({message: error.message});
  }
};

module.exports = {
  createProduct,
  getProducts,
  getProduct,
  getProductCategory,
  updateProduct,
  deleteProduct,
};