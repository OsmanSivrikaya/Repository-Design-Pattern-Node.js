const userService = require("../core/services/UserService");
const User = require("../src/core/entities/User");
const Response = require("../src/core/dtos/response/Response");

exports.createUser = async (req, res) => {
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

exports.getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await userService.getAsync(user);
    res.status(201).json(new Response(true, "Successfully", user));
  } catch (error) {
    res.status(400).json(new Response(false, error.message));
  }
};
