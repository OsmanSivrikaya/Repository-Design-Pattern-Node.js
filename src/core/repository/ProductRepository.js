"use strict";

const Product = require("../entities/Product");
const Repository = require("./Repository");
const repo = new Repository(Product);

module.exports = class ProductRepository extends Repository {
  getAllAsync = async () => {
    return await repo.getAllAsync();
  };

  getAsync = async (id) => {
    return await repo.getAsync(id);
  };

  addAsync = async (product) => {
    return await repo.addAsync(product);
  };

  updateAsync = async (id, product) => {
    return await repo.updateAsync(id, product);
  };

  removeAsync = async (id) => {
    return await repo.removeAsync(id);
  };
};
