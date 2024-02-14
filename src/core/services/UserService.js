"use strict";

const userRepository = require("../repository/UserRepository");

module.exports = class UserService {
  getAllAsync = async () => {
    return await userRepository.getAllAsync();
  };

  getAsync = async (id) => {
    return await userRepository.getAsync(id);
  };

  addAsync = async (user) => {
    return await userRepository.addAsync(user);
  };

  updateAsync = async (id, user) => {
    return await userRepository.updateAsync(id, user);
  };

  removeAsync = async (id) => {
    return await userRepository.removeAsync(id);
  };
};
