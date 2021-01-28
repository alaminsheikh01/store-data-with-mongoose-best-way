const express = require("express");
const bodyParser = require("body-parser");
const mongoConnect = require("./mongo");

const app = express();

app.use(bodyParser.json());

app.post("/products", mongoConnect.createProduct);
app.get("/products", mongoConnect.getProducts);

app.listen(3000);
