const { default: mongoose } = require("mongoose");
const Product = require("../models/Product");

//Helper: Search for Product by it's id and return it back
const getAndCheckOwnership = async (id, user_id) => {
  try {
    const product = await Product.findById(id);
    if (!product) {
      return res.status(404).json({ message: "Product not found!" });
    }
    // Check whether this Product belongs to the signed in user
    if (!product.postedBy.equals(user_id)) {
      
      throw new Error("You're not authorized to do this!");
    }
    return product;
  } catch (error) {
    throw new Error(error.message);
  }
};

// Create a Product
const createProduct = async (req, res) => {
  console.log(req.file, req.body)
  const { title, postedBy, price, category, location, description} = req.body;
  const {_id} = req.user;
  console.log(_id)
  //add to a database
  try {
    const product = await Product.create({
      title,
      price,
      description,
      category,
      //postedBy,
      postedBy : _id,
      location,
      imageURL: `/images/${req.file.filename}`
    });

    res.status(201).json(product);
    console.log(req.body)
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
    if( !products || products.length === 0){
      return res.status(404).json({ error: "No product found in this category!" });
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json(error);
  }
};

//fetch products by category
const getProductCity = async (req, res) => {
  const {location} = req.params;
  try {
    const products = await Product.find({location}).sort({ createdAt: -1 });
    if( !products || products.length === 0){
      return res.status(404).json({ error: "No product found in this city!" });
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json(error);
  }
};


//fetch products by user (postedBy)
const getProductsByUser = async (req, res) => {
  const {postedBy} = req.params;
  try {
    const products = await Product.find({postedBy}).sort({ createdAt: -1 });
    if( !products || products.length === 0){
      return res.status(404).json({ error: "No product posted by this user yet!" });
    }
    res.status(200).json(products);
  } catch (error) {
    res.status(400).json(error);
  }
};


//update product by id
const updateProduct = async (req, res) => {
  const { id } = req.params;
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }
    const product = await getAndCheckOwnership(id, req.user._id);
    // Update the properties of the product object
    product.title = req.body.title || product.title;
    product.description = req.body.description || product.description;
    product.price = req.body.price || product.price;
    product.category = req.body.category || product.category;
    product.location = req.body.location || product.location;
    // Update imageURL if a new image is provided
    if (req.file) {
      product.imageURL = `/images/${req.file.filename}`;
    }
    await product.save();
    console.log(req.body)
    res.status(200).json({
      ok: true,
      message: "Product updated successfully!",
      data: product,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      message: "An error occurred while updating the product.",
      error: error.message,
    });
  }
};

//delete product
const deleteProduct = async (req, res) => {
  const { id } = req.params;
  console.log("product",id)
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
  getProductsByUser,
  getProductCategory,
  updateProduct,
  deleteProduct,
  getProductCity,
};