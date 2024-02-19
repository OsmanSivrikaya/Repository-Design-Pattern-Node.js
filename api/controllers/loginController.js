"use strict";

const userService = require("../../src/core/services/UserService");
const Response = require("../../src/core/dtos/response/Response");

class LoginController {
  constructor() {
    this.userService = userService;
  }

  login = async (req, res) => {
    try {
      const { email, password } = req.body;
      const user = await this.userService.findByEmailAndPasswordAsync(
        email,
        password,
      );
      if (user)
        res.status(200).json(new Response(true, "Login successfully", user));
      else res.status(400).json(new Response(false, "You havent account", user));
    } catch (error) {
      res.status(400).json(new Response(false, error.message, null));
    }
  };
}

module.exports = new LoginController();
