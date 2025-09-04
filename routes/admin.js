const path = require("path");
const express = require("express");
const router = express.Router();

// const rootDir = require("../utils/path");

const productControllers = require("../controllers/productController");

router.get("/add-product", productControllers.getAddProduct);
router.post("/add-product", productControllers.postAddProduct);

module.exports = router;
