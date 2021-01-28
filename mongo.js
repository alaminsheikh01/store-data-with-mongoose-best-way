const MongoClient = require("mongodb").MongoClient;

const url =
  "mongodb+srv://practice:practice@cluster0.b6wib.mongodb.net/Products?retryWrites=true&w=majority";

const createProduct = async (req, res, next) => {
  const newProduct = {
    name: req.body.name,
    price: req.body.price,
  };
  const client = new MongoClient(url);

  try {
    await client.connect();

    const db = client.db();
    db.collection("products_demo").insertOne(newProduct);
  } catch (error) {
    return res.json({ message: "could not store data." });
  }

  client.close();
  res.json(newProduct);
};

const getProducts = async (req, res, next) => {
  const client = new MongoClient(url);

  let products_demo1;
  try {
    await client.connect();
    const db = client.db();
    products_demo1 = await db.collection("products_demo").find().toArray();
  } catch (error) {
    return res.json({ message: "could not retrieve products." });
  }
  client.close();
  res.json(products_demo1);
};

exports.createProduct = createProduct;
exports.getProducts = getProducts;
