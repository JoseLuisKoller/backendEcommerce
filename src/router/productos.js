const { Router } = require("express");

const productosRouter = Router();
const productos = [];

productosRouter.get("/", (req, res) => {
  res.json(productos);
});

productosRouter.get("/:id", (req, res) => {
  console.log(req.params.id);
  res.json(productos);
});

module.exports = productosRouter;
