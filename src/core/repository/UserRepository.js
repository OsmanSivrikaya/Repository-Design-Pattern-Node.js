"use strict";

const User = require("../entities/User");
const Repository = require("./Repository");
const repo = new Repository(User);

module.exports = class UserRepository extends Repository {
  getAllAsync = async () => {
    return await repo.getAllAsync();
  };

  getAsync = async (id) => {
    return await repo.getAsync(id);
  };

  addAsync = async (user) => {
    return await repo.addAsync(user);
  };

  updateAsync = async (id, user) => {
    return await repo.updateAsync(id, user);
  };

  removeAsync = async (id) => {
    return await repo.removeAsync(id);
  };
};
