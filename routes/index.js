const express = require('express');
const router = express.Router();
const multer = require('multer');
const { UserController } = require('../controllers');
const { validateRegister } = require('../utils/validators/userValidator');
const { authenticateToken } = require('../middleware/auth');

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
router.get('/users/:id', authenticateToken, UserController.getUserById);
router.put('/users/:id', authenticateToken, UserController.updateUser);
router.get('/current', authenticateToken, UserController.current);

module.exports = router;
