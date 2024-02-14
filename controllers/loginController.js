const secretKey = "öyle güzeldiki gülüşü"; // JWT için gizli anahtarınız
const jwt = require("jsonwebtoken");
const userService = require("../src/core/services/UserService");

//burda db ile ilişki kurulabilir
exports.login = (req, res) => {
  const { username, password } = req.body;
  // Basit bir kullanıcı adı ve şifre kontrolü
  if (username === "admin" && password === "password") {
    // Kullanıcı adı ve şifre doğruysa ve kullanıcı admin ise, role olarak 'admin' belirle
    const token = jwt.sign({ username, role: "admin" }, secretKey, {
      expiresIn: "1h",
    });
    res.json({ token });
  } else if (username === "user" && password === "password") {
    // Kullanıcı adı ve şifre doğruysa ve kullanıcı normal bir kullanıcı ise, role olarak 'user' belirle
    const token = jwt.sign({ username, role: "user" }, secretKey, {
      expiresIn: "1h",
    });
    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid username or password" });
  }
};
