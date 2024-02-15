const express = require("express");
const cors = require("cors");
const app = express();
const connectDatabase = require("./helpers/database/connectDatabase");
const port = 3000; // Dinleme portunu belirleme

// Middleware'leri kullanma
app.use(express.json()); // JSON parsing middleware
app.use(cors());

connectDatabase();

//#region Routes
const loginRoutes = require("./routes/loginRoutes");
app.get("/api/login", loginRoutes);

//const userRoutes = require("./routes/userRoutes");
//app.use("/api/users", userRoutes);
//#endregion

app.get("/dene", (req, res) => {
  // İstemci tarafında bir POST isteği gönderme
  fetch("http://localhost:3000/api/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      email: "admin",
      password: "password",
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => console.error("Hata:", error));
});

app.listen(port, () => {
  console.log(`Sunucu ${port} portunda çalışıyor...`);
});
