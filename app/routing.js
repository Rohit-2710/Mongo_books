module.exports = (app) => {
  const books = require("./controller");

  app.post("/books", books.addBook);
  app.get("/books", books.findAll);
  app.get("/find", books.findOne);
  app.post("/update", books.update);
  app.delete("/delete/:id", books.deleteByID);
};
