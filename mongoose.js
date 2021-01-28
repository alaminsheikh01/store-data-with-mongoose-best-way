const mongoose = require("mongoose");
const Product = require("./models/product");

const url =
  "mongodb+srv://practice:practice@cluster0.b6wib.mongodb.net/Products?retryWrites=true&w=majority";

mongoose
  .connect(url)
  .then(() => {
    console.log("Connected to database");
  })
  .catch(() => {
    console.log("connecton failed");
  });

const createProduct = async (req, res, next) => {
  const createdProduct = new Product({
    name: req.body.name,
    price: req.body.price,
  });
  const result = await createdProduct.save();
  res.json(result);
};

const getProducts = async (req, res, next) => {
  const products = await Product.find().exec();
  res.json(products);
};

exports.getProducts = getProducts;
exports.createProduct = createProduct;
