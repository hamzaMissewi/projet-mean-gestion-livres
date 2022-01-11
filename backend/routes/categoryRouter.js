const express = require("express");
const router = express.Router();

const categoryController = require("./../controllers/categCtrl");

router.get("/", categoryController.all);
router.get("/:id", categoryController.get);
router.post("/", categoryController.create);
router.put("/:id", categoryController.update);
router.delete("/:id", categoryController.delete);

module.exports = router;