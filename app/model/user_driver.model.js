module.exports = (sequelize, Sequelize) => {
const user_driver = sequelize.define('user_driver', {
        driverId: {
			type: Sequelize.INTEGER
        },
        usersId: {
			type: Sequelize.INTEGER
        }
	});

	return user_driver;
}