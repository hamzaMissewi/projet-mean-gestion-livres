const Category = require("../models/category")

exports.all = (req,res) => {
    Category.find()
    .then((categories) => res.status(200).json(categories))
    .catch((err)=> res.status(400).json({message: err.message}));
}

// get a category by id
exports.get = (req, res, next) => {
    Category.findOne({ _id: req.params.id })
      .then((category) => res.status(200).json(category))
      .catch((error) => res.status(404).json({ message: error.message }));
};