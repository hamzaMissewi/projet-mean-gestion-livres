const express = require("express");
const router = express.Router();

const categController = require("../controllers/categCtrl");

router.get("/", categController.all);
router.get("/:id", categController.get);
router.post("/", categController.create);
router.put("/:id", categController.update);
router.delete("/:id", categController.delete);

module.exports = router;