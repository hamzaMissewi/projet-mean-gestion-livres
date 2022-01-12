const express = require("express")
const router = express.Router()

const userController = require('../controllers/userCtrl');

router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/', userController.getUsers);
router.get('/:id', userController.getUser);

module.exports = router;