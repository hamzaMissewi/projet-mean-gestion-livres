const Book = require("./../models/livre");
// 
// get all books
// router.get('/', (req, res)=> {})
exports.all = (req, res) => {
  Book.find()
    .then((books) => res.status(200).json(books))
    .catch((err) => res.status(400).json({ error: err.message }));
};

// get a book by id
// router.get('/:id', (req,res,next) => {})
exports.get = (req, res, next) => {
  Book.findOne({ _id: req.params.id })
    .then((book) => res.status(200).json(book))
    .catch((error) => res.status(404).json({ message: error.message }));
};

// add new book to mediateque
// router.post('/:id', (req,res,next) => {})

exports.create = (req, res, next) => {
  const book = new Book({
    ...req.body,
  });
  book
    .save()
    .then(() => res.status(201).json({ message: "Book created ! " }))
    .catch((error) => res.status(400).json({ error }));
};

// update a book by id
exports.update = (req, res, next) => {
  Book.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() => res.status(200).json({ message: "Book updated !" }))
    .catch((error) => res.status(400).json({ error }));
};

// delete a book by id
exports.delete = (req, res, next) => {
  Book.deleteOne({ _id: req.params.id })
    .then(() => res.status(200).json({ message: "livre deleted !" }))
    .catch((error) => res.status(400).json({ error }));
};

// module.exports = livreCtrl;

