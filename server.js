import express from "express";
import routerProductos from "./routers/productos.router.js";
const app = express();
const port = 8080;
app.use("/api/productos", routerProductos);

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`servidor corriendo en http://localhost:${port}`);
});
