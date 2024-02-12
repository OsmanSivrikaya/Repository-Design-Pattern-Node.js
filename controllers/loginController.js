const secretKey = "öyle güzeldiki gülüşü"; // JWT için gizli anahtarınız
const jwt = require("jsonwebtoken");

//burda db ile ilişki kurulabilir
exports.login = (req, res) => {
  const { username, password } = req.body;
  // Basit bir kullanıcı adı ve şifre kontrolü
  if (username === "admin" && password === "password") {
    // Kimlik doğrulaması başarılı olduğunda bir JWT oluştur
    // Burada oluşan token süresi 1 saat dir.
    const token = jwt.sign({ username }, secretKey, { expiresIn: "1h" });
    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid username or password" });
  }
};
