const express = require("express");
const router = express.Router();

const livreCtrl = require("../controllers/livreCtrl");

router.get("/", livreCtrl.all);
router.get("/:id", livreCtrl.get);
router.post("/", livreCtrl.create);
router.put("/:id", livreCtrl.update);
router.delete("/:id", livreCtrl.delete);

module.exports = router;
