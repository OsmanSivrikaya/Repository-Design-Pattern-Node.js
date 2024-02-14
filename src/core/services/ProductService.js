"use strict";

const productRepository = require("../repository/ProductRepository");

module.exports = class ProductService {
  getAllAsync = async () => {
    return await productRepository.getAllAsync();
  };

  getAsync = async (id) => {
    return await productRepository.getAsync(id);
  };

  addAsync = async (product) => {
    return await productRepository.addAsync(product);
  };

  updateAsync = async (id, product) => {
    return await productRepository.updateAsync(id, product);
  };

  removeAsync = async (id) => {
    return await productRepository.removeAsync(id);
  };
};
