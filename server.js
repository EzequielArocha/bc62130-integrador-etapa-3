import express from "express";
import cors from "cors";
import "dotenv/config";
import routerProductos from "./routers/productos.router.js";
import mongoose from "mongoose";
import path from "node:path";
import routerUpload from "./routers/upload.router.js";
const app = express();
const port = process.env.PORT || 3000;
const corsConfig = { origin: "http://localhost:222" };

// ! 1. Conexión MongoDB

const conectar = async () => {
  try {
    await mongoose.connect(process.env.URI_MLOCAL);
    console.log("Conexión a Mongo realizada con exito!");
  } catch (error) {
    console.log("Error al conectar a MONGODB", error);
  }
};
conectar();
app.use(express.static(path.join("public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsConfig));
app.use("/api/productos", routerProductos);
app.use("/api/upload", routerUpload);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.all("*", (req, res) => {
  res
    .status(404)
    .send("La ruta ${req.url} utilizando el ${req.method} no está disponible!");
});

app.listen(port, () => {
  console.log(`servidor corriendo en http://localhost:${port}`);
});
