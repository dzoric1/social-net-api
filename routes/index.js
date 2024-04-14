const express = require('express');
const router = express.Router();
const multer = require('multer');
const { UserController } = require('../controllers');
const { validateRegister } = require('../utils/validators/userValidator');

const uploadDestination = 'uploads';

const storage = multer.diskStorage({
	destination: uploadDestination,
	filename: function (req, file, next) {
		next(null, file.originalname);
	},
});

const uploads = multer({ storage: storage });

router.post('/register', validateRegister, UserController.register);
router.post('/login', UserController.login);
router.get('/users/:id', UserController.getUserById);
router.put('/users/:id', UserController.updateUser);
router.get('/current', UserController.current);

module.exports = router;
