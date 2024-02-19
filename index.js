const express = require("express");
const cors = require("cors");
const app = express();
const connectDatabase = require("./helpers/database/connectDatabase");
const PORT = 3000; // Dinleme portunu belirleme

// Middleware'leri kullanma
app.use(express.json()); // JSON parsing middleware
app.use(cors());

//db erişimi şuanlık kapalı
//connectDatabase();

//#region Routes
const loginRoutes = require("./api/routes/loginRoutes");
app.use("/api/login", loginRoutes);

const userRoutes = require("./api/routes/userRoutes");
app.use("/api/users", userRoutes);
//#endregion

app.get("/dene", (req, res) => {
  var data = {
    email: "admin@gmail.com",
    password: "password",
  };
  // İstemci tarafında bir POST isteği gönderme
  fetch("http://localhost:3000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error("Hata verdi:", error));
});

app.listen(PORT, () => {
  console.log(
    "Sunucu",
    `http://localhost:${PORT}/api`,
    "portunda çalışıyor...",
  );
});
