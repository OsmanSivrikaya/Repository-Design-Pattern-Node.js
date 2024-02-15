"use strict";

const Product = require("../entities/Product");
const Repository = require("./Repository");

module.exports = class ProductRepository extends Repository {
  constructor() {
    super(Product);
  }
};
