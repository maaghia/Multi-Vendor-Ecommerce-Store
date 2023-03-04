require("dotenv").config();
const express = require('express');
const cors = require('cors')
const mongoose = require("mongoose");
mongoose.set('strictQuery', false);
const userRoutes = require('./routes/User');
const productRoutes = require("./routes/Product");
const imageRoutes = require("./routes/Images");

//express app
const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
    console.log(req.path);
    next();
  });


// Multer configuration for handling image uploads
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + path.extname(file.originalname));
  }
});

const fileFilter = (req, file, cb) => {
  if (
    file.mimetype === 'image/jpeg' ||
    file.mimetype === 'image/png' ||
    file.mimetype === 'image/gif'
  ) {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({ storage: storage, fileFilter: fileFilter });

//Registeered routes
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use('/api/images', upload.single('image'), imageRoutes);

mongoose
  .connect(process.env.MONGODB_URL)
  .then(() => {
    console.log("connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(process.env.PORT, () => {
    console.log(`listening for request on port ${process.env.PORT}`);
  });