import models from "../models/productos.model.js";
const obtenerProductos = async (req, rest) => {
  let id = req.params.id;
  if (id) {
  } else {
    const productos = await models.leerProductos();
    return rest.status(200).json(productos);
  }
  rest.send("GET ALL / ONE (READ)");
};
const guardarProducto = (req, rest) => {
  rest.send("POST (CREATE)");
};
const actualizarProducto = (req, rest) => {
  rest.send("PUT (UPDATE)");
};
const borrarProducto = (req, rest) => {
  rest.send("DELETE (DELETE)");
};
export default {
  obtenerProductos,
  guardarProducto,
  actualizarProducto,
  borrarProducto,
};
