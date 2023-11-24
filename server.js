import express from "express";
import cors from "cors";

import "dotenv/config";
import path from "node:path";
import routerProductos from "./routers/productos.router.js";
import routerUpload from "./routers/upload.router.js";
import routerCarrito from "./routers/carrito.router.js";
import handleConnection from "./utils/handleConnection.js";
const app = express();
const port = process.env.PORT || 3000;
const corsConfig = { origin: process.env.URL_FRONT_CORS };

// ! 1. Conexión MongoDB
//handleConnection(process.env.URI_MLOCAL);
handleConnection(process.env.URI_MREMOTA);

//URI_MREMOTA;

app.use(express.static(path.join("public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors(corsConfig));
app.use("/api/productos", routerProductos);
app.use("/api/upload", routerUpload);
app.use("/api/carrito", routerCarrito);

app.all("*", (req, res) => {
  res
    .status(404)
    .send("La ruta ${req.url} utilizando el ${req.method} no está disponible!");
});

app.listen(port, () => {
  console.log(`servidor corriendo en http://localhost:${port}`);
});
