"use strict";

const User = require("../entities/User");
const Repository = require("./Repository");

const users = [
  { name: "admin", email: "admin@gmail.com", password: "password" },
  { name: "user", email: "user@gmail.com", password: "password1" },
  { name: "user2", email: "user2@gmail.com", password: "password2" },
  { name: "user3", email: "user3@gmail.com", password: "password3" },
];

class UserRepository extends Repository {
  constructor() {
    super(User);
  }
  async findByEmailAndPasswordAsync(email, password) {
    try {
      //const user = await this._model.findOne({ email });
      const user = await users.find((u) => u.email === email);
      if (!user) return null;

      //Şifre kontrolü
      //const isPasswordValid = await user.comparePassword(password);
      //if (!isPasswordValid) return null;
      if (user.password != password) return null;

      return user;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = new UserRepository();
