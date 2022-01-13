const Category = require("../models/category");

// exports.all = (req, res) => {
//   Category.find()
//     .then((categories) => res.status(200).json(categories))
//     .catch((err) => res.status(400).json({ message: err.message }));
// };

const categoryCtrl = {
  getCategories: async(req,res) => {
    try {
      const categories = await Category.find()
      res.json(categories)
    } catch (err) {
      return res.status(500).json({msg: err.message})
    }
  },
  createCategory: async (req, res)=> {
    try {
      // if user have role = 1 ---> admin
      const {name} = req.body;
      const category = await Category.findOne({name})
      if(category) return res.status(400).json({msg: "This category already exists."})

      const newCategory = new Category({name})
      await newCategory.save()
      res.json({msg: "Created a category"})
    } catch (err) {
      return res.status(500).json({msg: err.message})
    }
  },
  deleteCategory: async(req,res)=> {
    try {
      
    } catch (err) {  
    }
  },
  // updateCategory: async(req,res)=>{}
}
export default categoryCtrl;