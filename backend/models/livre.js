const mongoose = require("mongoose");

var url = "https://i.stack.imgur.com/34AD2.jpg";
const bookSchema = new mongoose.Schema(
  {
    book_id: {
      type: String,
      unique: true,
      trim: true,
      required: true,
    },
    title: {
      type: String,
      required: true,
      // unique: true,
      // trim: true,
    },
    price: {
      type: Number,
      required: true,
    },
    postedBy: {
      type: String,
      required: true,
    },
    nbrePages: {
      type: Number,
      required: true,
    },
    profilePic: {
      // type: Object,
      type: String,
      required: false,
      // default: url
    },
    category: {
      // type: String,
      // type: mongoose.Schema.Types.ObjectId,
      type: Object,
      required: false,
      // ref: "Category",
      default: "Science"
    },
    dateCreated: {
      type: Date,
      required: true,
    },
    quantite: {
      type: Number,
      required: false,
    },
    //   comments: [{ body: "string", by: mongoose.Schema.Types.ObjectId }],
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;

// ou bien: module.exports = mongoose.model("Book", bookSchema)
