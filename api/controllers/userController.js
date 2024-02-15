const userService = require("../../src/core/services/UserService");
const User = require("../../src/core/entities/User");
const Response = require("../../src/core/dtos/response/Response");

class UserController {
  constructor() {
    this.userService = userService;
  }

  createUser = async (req, res) => {
    try {
      var user = new User({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
      });
      const savedUser = await userService.addAsync(user);

      res
        .status(201)
        .json(new Response(true, "User created successfully", savedUser));
    } catch (error) {
      res.status(400).json(new Response(false, error.message));
    }
  };
  getUser = async (req, res) => {
    try {
      const { id } = req.params;
      const user = await userService.getAsync(id);
      res.status(201).json(new Response(true, "Successfully", user));
    } catch (error) {
      res.status(400).json(new Response(false, error.message));
    }
  };
}
module.exports = new UserController();
