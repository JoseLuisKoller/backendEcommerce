const express = require("express");
const app = express();
const productosRouter = require("./router/productos.js");
const carritoRouter = require("./router/carrito.js");

app.use("/static", express.static(__dirname + "/public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use("/api/productos", productosRouter);

const PORT = 8080;
const server = app.listen(PORT, () => {
  console.log(
    `El servidor esta escuchando el puerto ${server.address().port}.`
  );
});
server.on("error", (error) => console.log(`Error ${error}`));
