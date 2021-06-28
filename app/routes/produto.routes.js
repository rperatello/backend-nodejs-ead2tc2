module.exports = app => {
  const produto = require("../controllers/produto.controller.js");

  var router = require("express").Router();

  // Insere novo produto
  router.post("/", produto.create);

  // Retorna todos produto
  router.get("/", produto.findAll);

  // // Retorna o produto dado seu ID
  router.get("/:id", produto.findOne);

  // // Atualiza o produto dado seu ID
  router.put("/:id", produto.update);

  // // Remove um produto dado seu id
  router.delete("/:id", produto.delete);

  app.use('/api/sc3003299/produtos', router);
};