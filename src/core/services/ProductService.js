"use strict";

const ProductRepository = require("../repository/ProductRepository");

class ProductService {
  constructor() {
    this.productRepository = new ProductRepository();
  }

  getAllAsync = async () => {
    return await this.productRepository.getAllAsync();
  };

  getAsync = async (id) => {
    return await this.productRepository.getAsync(id);
  };

  addAsync = async (product) => {
    return await this.productRepository.addAsync(product);
  };

  updateAsync = async (id, product) => {
    return await this.productRepository.updateAsync(id, product);
  };

  removeAsync = async (id) => {
    return await this.productRepository.removeAsync(id);
  };
}

module.exports = new ProductService();
