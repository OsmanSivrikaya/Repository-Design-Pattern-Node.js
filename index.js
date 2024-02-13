const express = require("express");
const cors = require("cors");
const app = express();

// Middleware'leri kullanma
app.use(express.json()); // JSON parsing middleware
app.use(cors());

const loginRoutes = require("./routes/loginRoutes");
app.use("/api/login", loginRoutes);

const userRoutes = require("./routes/userRoutes");
app.use("/api/user", userRoutes);

app.get("/dene", (req, res) => {
  // İstemci tarafında bir POST isteği gönderme
  fetch("http://localhost:3000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      username: "admin",
      password: "password",
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      const token = data.token; // Göndermek istediğiniz token

      fetch("http://localhost:3000/api/user/getData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Tokenı Authorization başlığında gönderme
        },
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((error) => {
          console.error("Hata:", error);
        });
    })
    .catch((error) => console.error("Hata:", error));
});

// Dinleme portunu belirleme
const port = 3000;

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor...`);
});
//gjk