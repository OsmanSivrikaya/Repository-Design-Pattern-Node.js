"use strict";

const userService = require("../src/core/services/UserService");
const Response = require("../src/core/dtos/response/Response");

class LoginController {
  constructor() {
    this.userService = userService;
  }

  login = async (req, res) => {
    try {
      console.log("sda");

      const { email, password } = req.body;
      const user = await this.userService.findByEmailAndPasswordAsync(
        email,
        password,
      );
      if (user)
        res
          .status(200)
          .json(new Response(true, "User created successfully", savedUser));
      else
        res
          .status(400)
          .json(new Response(true, "You havent account", savedUser));
    } catch (error) {
      res.status(400).json(new Response(false, error.message, null));
    }
  };
}

module.exports = new LoginController();
