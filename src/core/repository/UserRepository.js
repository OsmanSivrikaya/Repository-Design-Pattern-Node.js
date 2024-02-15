"use strict";

const User = require("../entities/User");
const Repository = require("./Repository");

module.exports = class UserRepository extends Repository {
  constructor() {
    super(User);
  }
  async findByEmailAndPasswordAsync(email, password) {
    try {
      const user = await this._model.findOne({ email });
      if (!user) return null;

      // Şifre kontrolü
      const isPasswordValid = await user.comparePassword(password);
      if (!isPasswordValid) return null;

      return user;
    } catch (error) {
      throw error;
    }
  }
};
