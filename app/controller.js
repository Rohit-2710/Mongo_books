const Book = require("./structure");
exports.addBook = (req, res) => {
  // if (!req.body.content) {
  //   return res.status(400).send({
  //     message: "Please note that the data cannot be blank",
  //   });
  // }
  const book = new Book({
    title: req.body.title || "Untitled Book",
    author: req.body.author || "Unknown author",
    description: req.body.description || "Description not available",
    cost: req.body.cost || "Cost not available",
  });
  book
    .save()
    .then((data) => {
      console.log("successfully saved book");
      res.send(data);
    })
    .catch((err) => {
      res
        .status(500)
        .send(
          "Sorry, some error occured while adding the book details to database" +
            err
        );
    });
};

exports.findAll = (req, res) => {
  Book.find()
    .then((book) => {
      res.send(book);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};

exports.findOne = (req, res) => {
  Book.findById(req.body.id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: "No book found with the given Id",
        });
      }
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message,
      });
    });
};
