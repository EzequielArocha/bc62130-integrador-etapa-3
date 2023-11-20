const obtenerProductos = (req, rest) => {
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
