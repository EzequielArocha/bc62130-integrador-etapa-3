import mongoose from "mongoose";

const carritoSchema = mongoose.Schema({
  carrito: Array,
});

const CarritoModel = mongoose.model("carritos", carritoSchema);

const crearCarrito = async (carrito) => {
  try {
    const carritoCreado = new CarritoModel({ carrito });
    const carritoGuardado = await carritoCreado.save();

    return carritoGuardado;
  } catch (error) {
    console.log("ERROR[crearCarrito]: Problemas al crear el carrito", error);
  }
};

export default {
  crearCarrito,
};
