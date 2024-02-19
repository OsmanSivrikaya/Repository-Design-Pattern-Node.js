"use strict";

const UserRepository = require("../repository/UserRepository");

class UserService {
  constructor() {
    this.userRepository = UserRepository;
  }

  getAllAsync = async () => {
    return await this.userRepository.getAllAsync();
  };

  getAsync = async (id) => {
    return await this.userRepository.getAsync(id);
  };

  addAsync = async (user) => {
    return await this.userRepository.addAsync(user);
  };

  updateAsync = async (id, user) => {
    return await this.userRepository.updateAsync(id, user);
  };

  removeAsync = async (id) => {
    return await this.userRepository.removeAsync(id);
  };

  findByEmailAndPasswordAsync = async (email, password) => {
    return await this.userRepository.findByEmailAndPasswordAsync(
      email,
      password,
    );
  };
}

module.exports = new UserService();
