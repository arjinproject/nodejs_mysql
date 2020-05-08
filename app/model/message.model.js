module.exports = (sequelize, Sequelize) => {
	const message = sequelize.define('message', {
		chatId: {
			type: Sequelize.INTEGER
        },
        adminId: {
			type: Sequelize.INTEGER
		},
		driverId: {
			type: Sequelize.INTEGER
		},
        is_delete: {
			type: Sequelize.STRING
        },
        message: {
			type: Sequelize.STRING
        },
        is_delete: {
			type: Sequelize.STRING
        },
	});

	return message;
}