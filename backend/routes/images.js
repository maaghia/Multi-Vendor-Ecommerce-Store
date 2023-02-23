const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

// images route
router.get("/:image", (req, res) => {
  res.sendFile(path.resolve(__dirname, `../uploads/${req.params.image}`));
});

module.exports = router;
