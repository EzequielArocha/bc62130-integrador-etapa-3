import mongoose from "mongoose";

// ! Creamos el esquema
const productosSchema = mongoose.Schema({
  nombre: String,
  precio: Number,
  stock: Number,
  marca: String,
  categoria: String,
  detalles: String,
  envio: Boolean,
});

// ! Creamos el Modelo

const ProductosModel = mongoose.model("productos", productosSchema);

//Metodos que nos van a servir de interfaz para interactuar con la DB

const leerProducto = (id) => {};

const leerProductos = async () => {
  try {
    const productos = await ProductosModel.find({});
    return productos;
  } catch (error) {
    console.log("[leerProductos]: Algo no salió bien...", error);
  }
};
const guardarProducto = (productoNuevo) => {};

const modificarProducto = (id, productoAEditar) => {};

const eliminarProducto = (id) => {};

export default {
  leerProducto,
  leerProductos,
  guardarProducto,
  modificarProducto,
  eliminarProducto,
};
