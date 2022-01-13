const express = require("express")
const router = express.Router()

const userController = require('../controllers/userCtrl');
const auth = require('../middleware/auth-version2')

router.post('/signup', userController.signup);
router.post('/login', userController.login);
router.get('/profile/:id', auth, userController.profile)
// router.get('/', userController.getUsers);
// router.get('/:id', userController.getUser);

module.exports = router;