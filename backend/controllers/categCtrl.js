const Category = require("../models/category");

exports.all = (req, res) => {
  Category.find()
    .then((categories) => res.status(200).json(categories))
    .catch((err) => res.status(400).json({ message: err.message }));
};
// ...
