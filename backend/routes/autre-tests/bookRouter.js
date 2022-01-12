const express = require("express");
const router = express.Router();

const Book = require("../models/livre");

// add book
router.post("/book", async (req, res) => {
  try {
    // const enteredBook = new Book(req.body);
    const {
      book_id,
      title,
      price,
      postedBy,
      nbrePages,
      profilePic,
      // category,
      dateCreated,
      quantite,
    } = req.body;
    // prettier
    if (!profilePic)
      return res
        .status(400)
        .json({ msg: "vous n'avez pas ajouté l'image de livre" });

    const book = await Book.findOne({ book_id });
    if (book)
      return res.status(400).json({ msg: "livre existe déja duplication ID" });
    const newBook = new Book({
      book_id,
      title: title.toLowerCase(),
      price,
      postedBy: postedBy.toUpperCase(),
      nbrePages,
      profilePic,
      dateCreated,
      quantite,
    });
    // const newBook = await enteredBook.save();
    await newBook.save();
    res.status(200).json({ msg: "un livre déja crée" });
    // res.satuts(200).json(savedbook);
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
});

router.get("/books", async (req, res) => {
  try {
    const books = await Book.find();
    res.status(200).send(books);
  } catch (err) {
    console.log(err);
    res.status(500).send();
  }
});

// router.update("/book", async (req, res) => {
router.put("/book", async (req, res) => {
  const selectedBook = new Book(req.body);
  try {
    const books = await Book.findByIdAndUpdate(id);
    res.status(200).send(books);
  } catch (err) {
    console.log(err);
  }
});
// delete("/book", authUser, async(req,res) =>)
router.delete("/book", async (req, res) => {
  try {
    const deleteBook = req.body;
    deleteBook = await user.save();
    deleteBook = filter(deleteBook.id != book.id);
    res.status(200).send();
  } catch (error) {
    // console.log(error);
    res.status(500).send();
  }
});

module.exports = router;
