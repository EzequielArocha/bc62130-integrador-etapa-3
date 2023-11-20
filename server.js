import express from "express";
import cors from "cors";
import "dotenv/config";
import routerProductos from "./routers/productos.router.js";
const app = express();
const port = process.env.PORT || 3000;
const corsConfig = { origin: "http://localhost:222" };
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api/productos", routerProductos);
app.use(cors(corsConfig));

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
