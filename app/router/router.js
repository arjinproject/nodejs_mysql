const verifySignUp = require('./verifySignUp');
const authJwt = require('./verifyJwtToken');


module.exports = function (app) {

	const controller = require('../controller/controller.js');
	// anasayfa route
	app.get("/", (req, res) => {
		res.json({ message: "Api uygulamasına hoş geldiniz..." });

	});

	app.post('/signup', [verifySignUp.checkDuplicateUserNameOrEmail, verifySignUp.checkRolesExisted], controller.signup);

	app.post('/signin', controller.signin);

	app.get('/api/test/user', [authJwt.verifyToken], controller.userContent);

	app.get('/api/test/admin', [authJwt.verifyToken, authJwt.isAdmin], controller.adminBoard);

	
}