module.exports = (app) => {
  const books = require("./controller");

  app.post("/books", books.addBook);
  app.get("/books", books.findAll);
};
