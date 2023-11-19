import express from "express";
const routerProductos = express.Router();

/*----------------------------------------*/
/* crud -> create | read | update | delete */
/*----------------------------------------*/

//! Get all / one (READ) - request de todos los productos
routerProductos.get("/:id?", (req, rest) => {
  rest.send("GET ALL / ONE (READ)");
});
//! Post (CREATE) - request para agregar un producto
routerProductos.post("/", (req, rest) => {
  rest.send("POST (CREATE)");
});

//! PUT (UPDATE) - request para actualizar un producto
routerProductos.put("/:id", (req, rest) => {
  rest.send("PUT (UPDATE)");
});

//! DELETE (DELETE) - request para eliminar un producto
routerProductos.delete("/:id", (req, rest) => {
  rest.send("DELETE (DELETE)");
});

export default routerProductos;
