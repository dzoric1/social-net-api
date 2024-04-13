const UserController = {
	register: async (req, res) => {
		res.send('Register');
	},
	login: async (req, res) => {
		res.send('Login');
	},
	getUserById: async (req, res) => {
		res.send('Get user by id');
	},
	updateUser: async (req, res) => {
		res.send('Update user');
	},
	current: async (req, res) => {
		res.send('Current user');
	},
};

module.exports = UserController;
