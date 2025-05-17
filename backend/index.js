const express = require("express");
const cors = require("cors");
const router = require("./router/user");

const app = express();
app.use(cors()); // Permite peticiones desde React

// Usa el router
app.use(router);

// Ruta raíz opcional
app.get("/", (req, res) => {
  res.send("Servidor funcionando");
});

app.listen(8080, () => {
  console.log("Servidor corriendo en el puerto 8080");
});
